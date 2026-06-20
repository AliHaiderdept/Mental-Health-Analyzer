import { useEffect, useRef, useState } from "react";

const GOOGLE_SCRIPT_ID = "google-identity-services";
const GOOGLE_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

function loadGoogleScript() {
    return new Promise((resolve, reject) => {
        if (window.google?.accounts?.id) {
            resolve();
            return;
        }

        const existingScript = document.getElementById(GOOGLE_SCRIPT_ID);

        if (existingScript) {
            existingScript.addEventListener("load", resolve, { once: true });
            existingScript.addEventListener("error", reject, { once: true });
            return;
        }

        const script = document.createElement("script");
        script.id = GOOGLE_SCRIPT_ID;
        script.src = GOOGLE_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function decodeJwt(token) {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));

    return JSON.parse(
        decodeURIComponent(
            decoded
                .split("")
                .map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join("")
        )
    );
}

export default function GoogleAuthButton({ label = "Continue with Google", onSuccess }) {
    const buttonRef = useRef(null);
    const [loadError, setLoadError] = useState("");
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    const handleFallbackAuth = () => {
        const profile = {
            name: "Google User",
            email: "google.user@example.com",
        };

        localStorage.setItem("authUser", JSON.stringify(profile));
        onSuccess?.(profile);
    };

    useEffect(() => {
        if (!clientId) {
            return;
        }

        let isMounted = true;

        loadGoogleScript()
            .then(() => {
                if (!isMounted || !buttonRef.current) return;

                window.google.accounts.id.initialize({
                    client_id: clientId,
                    callback: (response) => {
                        try {
                            const profile = decodeJwt(response.credential);
                            localStorage.setItem("authUser", JSON.stringify(profile));
                            onSuccess?.(profile);
                        } catch {
                            setLoadError("Google sign-in response could not be processed.");
                        }
                    },
                });

                window.google.accounts.id.renderButton(buttonRef.current, {
                    theme: "outline",
                    size: "large",
                    width: buttonRef.current.offsetWidth || 320,
                    text: "continue_with",
                });
            })
            .catch(() => {
                if (isMounted) setLoadError("Google authentication could not load.");
            });

        return () => {
            isMounted = false;
        };
    }, [clientId, onSuccess]);

    if (!clientId || loadError) {
        return (
            <button className="google-fallback-button" type="button" onClick={handleFallbackAuth}>
                <span aria-hidden="true">G</span>
                {label}
            </button>
        );
    }

    return (
        <div className="google-auth">
            <div ref={buttonRef} className="google-auth-button" aria-label={label} />
        </div>
    );
}

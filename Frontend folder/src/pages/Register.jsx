import { useState } from "react";
import GoogleAuthButton from "../components/GoogleAuthButton";
import PasswordField from "../components/PasswordField";

const countryCodes = [
    { code: "+92", name: "Pakistan" },
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    { code: "+971", name: "United Arab Emirates" },
];

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        countryCode: "+92",
        phone: "",
    });
    const [message, setMessage] = useState("");

    const updateField = (field) => (event) => {
        setForm((current) => ({ ...current, [field]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (form.password !== form.repeatPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        const user = {
            name: form.name,
            email: form.email,
            phone: form.phone ? `${form.countryCode}${form.phone}` : "",
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));
        setMessage("Account details received successfully.");
    };

    return (
        <div className="container auth-container">
            <div className="card auth-card register-card">
                <h1>Create Account</h1>
                <p className="muted">Register to save your mood history and review your progress.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="register-name">Name</label>
                        <input
                            id="register-name"
                            type="text"
                            value={form.name}
                            onChange={updateField("name")}
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="register-email">Email</label>
                        <input
                            id="register-email"
                            type="email"
                            value={form.email}
                            onChange={updateField("email")}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <PasswordField
                        id="register-password"
                        label="Password"
                        value={form.password}
                        onChange={updateField("password")}
                    />

                    <PasswordField
                        id="repeat-password"
                        label="Repeat Password"
                        value={form.repeatPassword}
                        onChange={updateField("repeatPassword")}
                        placeholder="Repeat password"
                    />

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number <span className="optional">(optional)</span></label>
                        <div className="phone-row">
                            <select
                                aria-label="Country code"
                                value={form.countryCode}
                                onChange={updateField("countryCode")}
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.code} {country.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                id="phone"
                                type="tel"
                                value={form.phone}
                                onChange={updateField("phone")}
                                placeholder="3001234567"
                            />
                        </div>
                    </div>

                    <div className="auth-actions">
                        <button className="btn" type="submit">Create Account</button>
                        <a href="/login" className="btn secondary" style={{marginLeft:8}}>Login</a>
                    </div>
                </form>

                <div className="auth-divider"><span>or</span></div>

                <GoogleAuthButton
                    label="Sign up with Google"
                    onSuccess={(profile) => setMessage(`Google account connected for ${profile.name || profile.email}.`)}
                />

                {message && (
                    <p className={`form-note ${message.includes("not") ? "error" : "success"}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}

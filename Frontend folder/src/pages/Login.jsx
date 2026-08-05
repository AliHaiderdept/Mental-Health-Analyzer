import { useState } from "react";
import GoogleAuthButton from "../components/GoogleAuthButton";
import PasswordField from "../components/PasswordField";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const updateField = (field) => (event) => {
        setForm((current) => ({ ...current, [field]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("loginEmail", form.email);
        setMessage("Login details received successfully.");
    };

    return (
        <div className="container auth-container">
            <div className="card auth-card">
                <h1>Login</h1>
                <p className="muted">Sign in to view your dashboard and analysis.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={updateField("email")}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <PasswordField
                        id="password"
                        label="Password"
                        value={form.password}
                        onChange={updateField("password")}
                    />

                    <div className="auth-actions">
                        <button className="btn" type="submit">Sign In</button>
                        <a href="/" className="btn secondary" style={{marginLeft:8}}>Cancel</a>
                    </div>
                </form>

                <div className="auth-divider"><span>or</span></div>

                <GoogleAuthButton
                    label="Sign in with Google"
                    onSuccess={(profile) => setMessage(`Welcome, ${profile.name || profile.email}.`)}
                />

                {message && <p className="form-note success">{message}</p>}

                <p className="form-note">
                    New here? <a href="/register">Create an account</a>
                </p>
            </div>
        </div>
    );
}

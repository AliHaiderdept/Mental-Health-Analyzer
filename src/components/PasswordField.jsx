import { useState } from "react";

export default function PasswordField({ id, label, value, onChange, placeholder = "Enter password" }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className="password-field">
                <input
                    id={id}
                    type={isVisible ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                />
                <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setIsVisible((visible) => !visible)}
                >
                    {isVisible ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
}

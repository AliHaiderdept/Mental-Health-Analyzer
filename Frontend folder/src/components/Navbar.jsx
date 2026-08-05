import { useState } from "react";

const navLinks = ["Home", "Info", "Dashboard", "Analysis", "Quiz", "Login", "Register"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <a className="navbar-brand brand-script" href="/" onClick={() => setIsOpen(false)}>
                Mythiorapy
            </a>

            <button
                className="navbar-toggle"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
                {navLinks.map((label) => {
                    const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;

                    return (
                        <li key={label}>
                            <a href={href} onClick={() => setIsOpen(false)}>
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

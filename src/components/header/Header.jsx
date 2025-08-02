import React, { useState } from "react";
import "./header.css";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from '../icons/Icons';

const Header = () => {
    // Toggle menu
    const[Toggle, showMenu] = useState(false);
    const[mode, setMode] = useThemeSwitcher();
    const handleThemeChange = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };
    {/* ======== Theme button ======== */}
    const ThemeSwitcherButton = ({ className }) => (
        <label className={`theme-switcher ${className}`} htmlFor={`theme-toggle-${className}`}>
            <input
                id={`theme-toggle-${className}`}
                type="checkbox"
                className="theme-switcher__input"
                checked={mode === 'dark'}
                onChange={handleThemeChange}
            />
            <div className="theme-switcher__slider">
                <div className="theme-switcher__thumb">
                    {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
                </div>
            </div>
        </label>
    );
    {/* ============================== */}

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Galletti</a>

                <ThemeSwitcherButton className="theme-switcher-mobile" />

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item nav__item-switcher">
                            <ThemeSwitcherButton className="theme-switcher-desktop" />
                        </li>

                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li> */}

                        {/* <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
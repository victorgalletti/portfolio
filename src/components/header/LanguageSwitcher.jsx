import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useLanguageSwitcher from '../hooks/useLanguageSwitcher';
import { USFlag, BRFlag } from '../icons/Flags'; 
import './languageSwitcher.css'; 

// Defina os idiomas disponíveis aqui
const languages = [
    { code: 'en', name: 'English', flag: <USFlag /> },
    { code: 'pt', name: 'Português', flag: <BRFlag /> },
];

const LanguageSwitcher = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useLanguageSwitcher();
    const { i18n } = useTranslation();
    const switcherRef = useRef(null);

    // Fecha o dropdown se clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (switcherRef.current && !switcherRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (code) => {
        setLanguage(code);
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    return (
        <div className={`language-switcher ${className || ''}`} ref={switcherRef}>
            <button className="language-switcher-button" onClick={() => setIsOpen(!isOpen)}>
                {currentLanguage.flag}
                <i className={`uil uil-angle-down arrow-icon ${isOpen ? 'open' : ''}`}></i>
            </button>

            {isOpen && (
                <ul className={`language-switcher-dropdown ${isOpen ? 'open' : ''}`}>
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            className="language-switcher-item"
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            {lang.flag}
                            <span>{lang.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;
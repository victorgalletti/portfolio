import { useState, useEffect } from 'react';

const useLanguageSwitcher = () => {
    const [language, setLanguage] = useState('pt');

    useEffect(() => {
        const userPref = window.localStorage.getItem('language');

        if (userPref) {
            setLanguage(userPref);
        } else {
            const browserLanguage = navigator.language.split('-')[0];
            setLanguage(browserLanguage);
        }
    }, []); 

    useEffect(() => {
        if (language) {
            window.localStorage.setItem('language', language);
        }
    }, [language]); 

    return [language, setLanguage];
};

export default useLanguageSwitcher;
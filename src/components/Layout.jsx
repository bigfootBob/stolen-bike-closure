import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MdPedalBike, MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="layout">
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <MdPedalBike className="logo-icon" />
                        Stolen Bike Closure
                    </Link>
                    <div className="navbar__links">
                        <NavLink to="/" current={location.pathname}>Home</NavLink>
                        <NavLink to="/grief-counseling" current={location.pathname}>Grief Counseling</NavLink>
                        <NavLink to="/karma-chronicles" current={location.pathname}>Karma Chronicles</NavLink>
                        <NavLink to="/recovery-merch" current={location.pathname}>Recovery Merch</NavLink>
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            <motion.main
                className="main-content"
                initial={shouldReduceMotion ? false : { y: 20 }}
                animate={shouldReduceMotion ? false : { y: 0 }}
                exit={shouldReduceMotion ? false : { y: -20 }}
                transition={{ duration: 0.5 }}
                key={location.pathname}
            >
                {children}
            </motion.main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Stolen Bike Closure. Finding peace after a bike's disappearance.</p>
                <p className="footer__disclaimer">Parody. Comedy. Humor. Fun. Not affiliated with any actual therapy.</p>
            </footer>
        </div>
    );
};

const LANGUAGES = [
    { code: 'en-US', label: 'English (US)', flag: '🇺🇸' },
    { code: 'en-AU', label: 'English (AU)', flag: '🇦🇺' },
    { code: 'zh-CN', label: '中文 (简体)',   flag: '🇨🇳' },
    { code: 'pt-BR', label: 'Português (BR)', flag: '🇧🇷' },
    { code: 'nl-NL', label: 'Nederlands',     flag: '🇳🇱' },
    { code: 'de-DE', label: 'Deutsch',        flag: '🇩🇪' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

    return (
        <div className="lang-switcher" ref={ref}>
            <button
                className="lang-switcher__toggle"
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Select language"
            >
                <MdLanguage className="lang-switcher__globe" />
                <span className="lang-switcher__current">{current.flag}</span>
            </button>
            {open && (
                <ul className="lang-switcher__dropdown" role="listbox">
                    {LANGUAGES.map(lang => (
                        <li
                            key={lang.code}
                            role="option"
                            aria-selected={lang.code === i18n.language}
                            className={`lang-switcher__option${lang.code === i18n.language ? ' lang-switcher__option--active' : ''}`}
                            onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                        >
                            <span className="lang-switcher__flag">{lang.flag}</span>
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const NavLink = ({ to, current, children }) => {
    const isActive = current === to;
    return (
        <Link
            to={to}
            className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    );
};

export default Layout;

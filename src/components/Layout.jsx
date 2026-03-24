import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdPedalBike } from 'react-icons/md';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
    const location = useLocation();

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
                    </div>
                </div>
            </nav>

            <motion.main 
                className="main-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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

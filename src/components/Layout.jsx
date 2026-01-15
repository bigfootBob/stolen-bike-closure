import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-noir-black text-wellness-glow">
            <nav className="p-6 border-b border-noir-gray/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-serif font-bold text-wellness-glow hover:text-spirit-blue transition-colors">
                        Stolen Bike Closure
                    </Link>
                    <div className="space-x-8 hidden md:flex font-medium">
                        <NavLink to="/" current={location.pathname}>Home</NavLink>
                        <NavLink to="/grief-counseling" current={location.pathname}>Grief Counseling</NavLink>
                        <NavLink to="/karma-chronicles" current={location.pathname}>Karma Chronicles</NavLink>
                        <NavLink to="/recovery-merch" current={location.pathname}>Recovery Merch</NavLink>
                    </div>
                </div>
            </nav>

            <main className="flex-grow container mx-auto px-4 py-12">
                {children}
            </main>

            <footer className="p-8 border-t border-noir-gray/30 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Stolen Bike Closure. Healing specifically for people whose bikes are gone.</p>
                <p className="mt-2 text-xs">Not affiliated with any actual therapy.</p>
            </footer>
        </div>
    );
};

const NavLink = ({ to, current, children }) => {
    const isActive = current === to;
    return (
        <Link
            to={to}
            className={`transition-all duration-300 hover:text-spirit-blue ${isActive ? 'text-spirit-blue border-b border-spirit-blue pb-1' : 'text-gray-400'}`}
        >
            {children}
        </Link>
    );
};

export default Layout;

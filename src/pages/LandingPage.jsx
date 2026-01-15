import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-12 animate-fade-in-up">
            <div className="space-y-6 max-w-3xl">
                <div className="inline-block px-4 py-1 rounded-full bg-noir-gray/50 text-spirit-blue text-sm mb-4 border border-spirit-blue/20">
                    The #1 Place for Post-Theft Clarity
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                    They took your wheels.<br />
                    <span className="text-spirit-blue italic">Don't let them take your soul.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Welcome to a safe space where we process the specific trauma of returning to where you locked your bike and finding only a cut lock on the ground.
                </p>
            </div>

            <div className="flex gap-6 flex-wrap justify-center">
                <Link
                    to="/grief-counseling"
                    className="px-8 py-4 bg-wellness-glow text-noir-black font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(226,232,240,0.3)]"
                >
                    Start Healing
                </Link>
                <Link
                    to="/karma-chronicles"
                    className="px-8 py-4 bg-transparent border border-noir-gray hover:border-spirit-blue text-wellness-glow rounded-lg hover:bg-noir-gray/30 transition-all"
                >
                    Read Revenge Fantasies
                </Link>
            </div>

            {/* Decorative noir element */}
            <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-noir-gray to-transparent opacity-50"></div>
        </div>
    );
};

export default LandingPage;

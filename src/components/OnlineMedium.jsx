import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiCrystalBall } from 'react-icons/gi';
import '../styles/SubPages.scss';

const OnlineMedium = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="page">
            <div className="page__header">
                <h2>Virtual Séance</h2>
                <p>Connect with the spirit of your stolen bicycle...</p>
            </div>
            <motion.div 
                className="karma-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ maxWidth: '600px', margin: '0 auto', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                            boxShadow: ['0 0 10px rgba(46,196,182,0.1)', '0 0 30px rgba(46,196,182,0.4)', '0 0 10px rgba(46,196,182,0.1)'] 
                        }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        style={{ borderRadius: '50%', padding: '2rem', marginBottom: '1.5rem', background: 'transparent' }}
                    >
                        <GiCrystalBall size={80} color="var(--color-primary)" />
                    </motion.div>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>The Spirits are Recharging</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Our digital mediums are currently recovering their spiritual energy after a recent wave of e-bike thefts. Please return later to physically channel the remaining spirit of your 
                    two-wheeled companion.
                </p>
                <button className="btn btn--secondary" style={{ marginTop: '2rem' }} onClick={() => setMessage('Séance connection failed. Please try again later.')}>
                    Attempt Connection
                </button>
                {message && (
                    <p style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>{message}</p>
                )}
            </motion.div>
        </div>
    );
};

export default OnlineMedium;

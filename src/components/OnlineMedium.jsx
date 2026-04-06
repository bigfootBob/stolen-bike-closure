import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCrystalBall } from 'react-icons/gi';
import messages from '../data/seancemessages.json';
import '../styles/SubPages.scss';

const OnlineMedium = () => {
    const [transmission, setTransmission] = useState(null);
    const [isChanneling, setIsChanneling] = useState(false);

    const handleAttemptConnection = () => {
        setIsChanneling(true);
        setTransmission(null);

        setTimeout(() => {
            const random = messages[Math.floor(Math.random() * messages.length)];
            setTransmission(random);
            setIsChanneling(false);
        }, 2500);
    };

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
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        boxShadow: isChanneling
                            ? ['0 0 20px rgba(46,196,182,0.6)', '0 0 60px rgba(46,196,182,0.9)', '0 0 20px rgba(46,196,182,0.6)']
                            : ['0 0 10px rgba(46,196,182,0.1)', '0 0 30px rgba(46,196,182,0.4)', '0 0 10px rgba(46,196,182,0.1)']
                    }}
                    transition={{ repeat: Infinity, duration: isChanneling ? 1 : 3, ease: 'easeInOut' }}
                    style={{ borderRadius: '50%', padding: '2rem', marginBottom: '1.5rem', background: 'transparent' }}
                >
                    <GiCrystalBall size={80} color="var(--color-primary)" />
                </motion.div>

                <AnimatePresence mode="wait">
                    {!transmission && !isChanneling && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>The Spirits Are Listening</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Our digital mediums are standing by to channel the remaining spirit of your two-wheeled companion. Press below to attempt a connection.
                            </p>
                        </motion.div>
                    )}

                    {isChanneling && (
                        <motion.div
                            key="channeling"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Reaching Beyond…</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>Establishing connection with the spirit realm. Please do not refresh.</p>
                        </motion.div>
                    )}

                    {transmission && !isChanneling && (
                        <motion.div
                            key="transmission"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Transmission Received</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                — from the spirit of <em>{transmission.from}</em>
                            </p>
                            <p style={{
                                color: 'var(--color-text-main)',
                                fontStyle: 'italic',
                                lineHeight: 1.7,
                                padding: '1.25rem',
                                background: 'rgba(46,196,182,0.06)',
                                borderRadius: '8px',
                                borderLeft: '3px solid rgba(46,196,182,0.4)',
                            }}>
                                "{transmission.message}"
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    className="btn btn--secondary"
                    style={{ marginTop: '2rem' }}
                    onClick={handleAttemptConnection}
                    disabled={isChanneling}
                >
                    {isChanneling ? 'Channeling…' : transmission ? 'Contact Again' : 'Attempt Connection'}
                </button>
            </motion.div>
        </div>
    );
};

export default OnlineMedium;

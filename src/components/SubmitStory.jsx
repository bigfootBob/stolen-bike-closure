import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const SubmitStory = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Saved securely to the universe (not implemented yet).');
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>Submit Your Own Story</h2>
                <p>Share your tale of karmic justice with the world.</p>
            </div>
            <motion.div 
                className="karma-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}
            >
                <form className="story-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="title" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Story Title</label>
                        <input id="title" type="text" placeholder="e.g. The Overconfident Locksmith" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }} required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="karmaLevel" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Karma Level</label>
                        <select id="karmaLevel" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)' }}>
                            <option>Immediate</option>
                            <option>Psychological</option>
                            <option>Slow Burn</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="summary" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>The Tale</label>
                        <textarea id="summary" rows="5" placeholder="What happened next?" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--color-text-muted)', background: 'transparent', color: 'var(--color-text-main)', resize: 'vertical' }} required></textarea>
                    </div>
                    <button type="submit" className="btn btn--primary" style={{ marginTop: '1rem', width: '100%' }}>Submit for Judgment</button>
                    {message && (
                        <p style={{ margin: 0, color: 'var(--color-primary)', textAlign: 'center' }}>{message}</p>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default SubmitStory;

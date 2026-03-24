import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const BuildStory = () => {
    const [story, setStory] = useState('');

    const generateStory = () => {
        const intros = ["It was a dark and stormy Tuesday when ", "Locked safely outside a hipster coffee shop, ", "With a cable lock thinner than dry spaghetti, "];
        const actions = ["the thief decided to take my majestic steed.", "a rogue with bolt cutters struck.", "my beloved two-wheeler disappeared."];
        const karmas = [" Two days later, they hit a pothole and bent the rim.", " Karma ensured their right pedal remained forever squeaky.", " But the universe struck back: the chain slipped on every uphill."];
        
        const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
        
        setStory(randomElement(intros) + randomElement(actions) + randomElement(karmas));
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>Build a Story</h2>
                <p>Let the universe weave a tale of revenge for you.</p>
            </div>
            <motion.div 
                className="karma-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ maxWidth: '600px', margin: '0 auto', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
                <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                    {story ? `"${story}"` : "Click below to invoke karmic justice..."}
                </div>
                <button className="btn btn--secondary" onClick={generateStory}>
                    Generate Karmic Retribution
                </button>
            </motion.div>
        </div>
    );
};

export default BuildStory;

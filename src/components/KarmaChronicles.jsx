import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BannerAdvert from './BannerAdvert';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SubPages.scss';

const stories = [
    {
        title: "The Thief Who Stole a Bike with No Brakes",
        summary: "Danny thought he scored a fixie. He scored a trip to the hedges at the bottom of 4th Street.",
        karmaLevel: "Immediate"
    },
    {
        title: "The Rusty Chain Gang",
        summary: "Stolen during a rainstorm, the bike's chain seized up exactly 3 miles from the thief's house. He had to carry it home.",
        karmaLevel: "Slow Burn"
    },
    {
        title: "The Apple AirTag Incident",
        summary: "The owner didn't call the cops. They just remotely played 'Baby Shark' on the hidden speaker at 3 AM every night for a week.",
        karmaLevel: "Psychological"
    }
];

const getKarmaClass = (level) => {
    switch(level) {
        case 'Immediate': return 'level-immediate';
        case 'Psychological': return 'level-psychological';
        case 'Slow Burn': return 'level-slow-burn';
        default: return '';
    }
};

const KarmaChronicles = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedStory(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="page">
            <div className="page__header">
                <h2>Karma Chronicles</h2>
                <p>Because sometimes the universe strikes back.</p>
            </div>

            <div className="karma-grid">
                {stories.map((story, index) => (
                    <motion.article 
                        key={index} 
                        className="karma-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedStory(story)}
                        onKeyDown={(e) => { 
                            if (e.key === 'Enter' || e.key === ' ') { 
                                e.preventDefault(); 
                                setSelectedStory(story); 
                            } 
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="karma-card__badge">
                            Case File #{index + 401}
                        </div>

                        <h3>{story.title}</h3>
                        <p className="karma-card__summary">
                            {story.summary}
                        </p>

                        <div className="karma-card__level">
                            Karma Level:
                            <span className={getKarmaClass(story.karmaLevel)}>
                                {story.karmaLevel}
                            </span>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/submit-story" className="btn btn--primary">
                    Submit Your Own Story
                </Link>
                <Link to="/build-story" className="btn btn--secondary">
                    Build a Story
                </Link>
            </div>

            <AnimatePresence>
                {selectedStory && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedStory(null)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '2rem' }}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-text-muted)', padding: '3rem', borderRadius: '16px', maxWidth: '600px', width: '100%', position: 'relative', overflowY: 'auto', maxHeight: '90vh' }}
                        >
                            <button 
                                onClick={() => setSelectedStory(null)}
                                style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--color-text-main)', fontSize: '1.5rem', cursor: 'pointer' }}
                                aria-label="Close Modal"
                            >
                                &times;
                            </button>
                            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2rem' }}>{selectedStory.title}</h2>
                            <p style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '1.1rem' }}>"{selectedStory.summary}"</p>
                            <div style={{ color: 'var(--color-text-main)', lineHeight: '1.8' }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p style={{ marginTop: '1rem' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <BannerAdvert />
        </div>
    );
};

export default KarmaChronicles;

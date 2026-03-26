import React from 'react';
import { motion } from 'framer-motion';
import { GiScrollQuill } from 'react-icons/gi';
import '../styles/SubPages.scss';

const ObituaryTemplates = () => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert('Obituary copied to clipboard!');
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>Obituary Templates</h2>
                <p>Honor the exact top-tube geometry and emotional impact your bike had on your life.</p>
            </div>
            
            <div className="karma-grid">
                <motion.div className="karma-card" whileHover={{ y: -5 }}>
                    <div className="karma-card__badge">Template 1</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiScrollQuill size={32} color="var(--color-primary)" />
                        <h3 style={{ margin: 0, textShadow: 'none' }}>The Stoic Commuter</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                        "It is with a heavy heart that I announce the sudden and unceremonious departure of my trusted steed. Taken before its time from outside the downtown grocery store. It leaves behind a grieving U-lock, an empty space in the hallway, and a rider who will now have to re-evaluate the local bus schedule. May its gears never grind for its new 'owner'."
                    </p>
                    <button className="btn btn--primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => handleCopy("It is with a heavy heart that I announce the sudden and unceremonious departure of my trusted steed. Taken before its time from outside the downtown grocery store. It leaves behind a grieving U-lock, an empty space in the hallway, and a rider who will now have to re-evaluate the local bus schedule. May its gears never grind for its new 'owner'.")}>
                        Copy to Clipboard
                    </button>
                </motion.div>

                <motion.div className="karma-card" whileHover={{ y: -5 }}>
                    <div className="karma-card__badge">Template 2</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiScrollQuill size={32} color="var(--color-primary)" />
                        <h3 style={{ margin: 0, textShadow: 'none' }}>The Passionate Carbon</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                        "Farewell to my beautiful, lightweight carbon friend. Your aerodynamic frame cut through the wind like a hot knife through butter. Whoever took you better appreciate Shimano Ultegra shifting. I hope you give them flat tires every day for the rest of their pathetic life. Rest in peace, my love."
                    </p>
                    <button className="btn btn--primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => handleCopy("Farewell to my beautiful, lightweight carbon friend. Your aerodynamic frame cut through the wind like a hot knife through butter. Whoever took you better appreciate Shimano Ultegra shifting. I hope you give them flat tires every day for the rest of their pathetic life. Rest in peace, my love.")}>
                        Copy to Clipboard
                    </button>
                </motion.div>

                <motion.div className="karma-card" whileHover={{ y: -5 }}>
                    <div className="karma-card__badge">Template 3</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiScrollQuill size={32} color="var(--color-primary)" />
                        <h3 style={{ margin: 0, textShadow: 'none' }}>The Frankenbiker</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem', background: 'rgba(0,0,0,0.1)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                        "To the person who stole my rusty 1993 mountain bike with mis-matched tires and squeaky brakes: Congratulations. You've somehow managed to steal a bike that costs less than the bolt cutters you used. Enjoy the fact that the left pedal is permanently loose. May it throw you into a bush at the earliest opportunity."
                    </p>
                    <button className="btn btn--primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => handleCopy("To the person who stole my rusty 1993 mountain bike with mis-matched tires and squeaky brakes: Congratulations. You've somehow managed to steal a bike that costs less than the bolt cutters you used. Enjoy the fact that the left pedal is permanently loose. May it throw you into a bush at the earliest opportunity.")}>
                        Copy to Clipboard
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ObituaryTemplates;

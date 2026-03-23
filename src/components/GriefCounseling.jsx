import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import stagesData from '../data/stages.json';
import '../styles/SubPages.scss';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' } }
};

const GriefCounseling = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    const handleNext = () => {
        setCurrentSetIndex((prev) => (prev + 1) % stagesData.length);
    };

    const handlePrev = () => {
        setCurrentSetIndex((prev) => (prev - 1 + stagesData.length) % stagesData.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSetIndex((prev) => (prev + 1) % stagesData.length);
        }, 30000);
        return () => clearInterval(timer);
    }, []);

    const currentStages = stagesData[currentSetIndex];

    return (
        <div className="page">
            <div className="page__header">
                <h2>The 5 Stages of Bike Grief</h2>
                <p>Processing the loss of your two-wheeled companion.</p>
                <div className="stages-controls" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={handlePrev} aria-label="Previous Perspective" style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <IoChevronBack size={18} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={handleNext} aria-label="Next Perspective" style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <IoChevronForward size={18} />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.ul 
                    key={currentSetIndex}
                    className="counseling-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {currentStages.map((item, index) => (
                        <motion.li key={index} className="counseling-card" variants={itemVariants}>
                            <h3>{item.stage}</h3>
                            <p className="counseling-card__desc">{item.desc}</p>
                            <div className="counseling-card__advice">
                                <strong>Coping Strategy:</strong> {item.advice}
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </div>
    );
};

export default GriefCounseling;

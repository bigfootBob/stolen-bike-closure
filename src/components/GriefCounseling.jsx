import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward, IoPause, IoPlay } from 'react-icons/io5';
import { GiScrollQuill, GiOpenBook, GiCrystalBall } from 'react-icons/gi';
import stagesData from '../data/stages.json';
import BannerAdvert from './BannerAdvert';
import '../styles/SubPages.scss';
import '../styles/LandingPage.scss';

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
    const [currentStageIndex, setCurrentStageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleNext = () => {
        setCurrentSetIndex((prev) => (prev + 1) % stagesData.length);
        setCurrentStageIndex(0);
    };

    const handlePrev = () => {
        setCurrentSetIndex((prev) => (prev - 1 + stagesData.length) % stagesData.length);
        setCurrentStageIndex(0);
    };

    useEffect(() => {
        let timer;
        if (!isPaused) {
            timer = setInterval(() => {
                if (!isExpanded) {
                    setCurrentStageIndex((prev) => {
                        const nextIndex = prev + 1;
                        if (nextIndex >= stagesData[currentSetIndex].length) {
                            setCurrentSetIndex((s) => (s + 1) % stagesData.length);
                            return 0;
                        }
                        return nextIndex;
                    });
                } else {
                    setCurrentSetIndex((prev) => (prev + 1) % stagesData.length);
                }
            }, isExpanded ? 30000 : 6000);
        }
        return () => clearInterval(timer);
    }, [isPaused, isExpanded, currentSetIndex]);

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
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? "Play Presentation" : "Pause Presentation"} style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        {isPaused ? <IoPlay size={18} style={{ marginLeft: '2px' }} /> : <IoPause size={18} />}
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={handleNext} aria-label="Next Perspective" style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <IoChevronForward size={18} />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.ul 
                    key={isExpanded ? `expanded-${currentSetIndex}` : `single-${currentSetIndex}-${currentStageIndex}`}
                    className="counseling-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={isExpanded ? {} : { display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {isExpanded ? currentStages.map((item, index) => (
                        <motion.li key={index} className="counseling-card" variants={itemVariants}>
                            <h3>{item.stage}</h3>
                            <p className="counseling-card__desc">{item.desc}</p>
                            <div className="counseling-card__advice">
                                <strong>Coping Strategy:</strong> {item.advice}
                            </div>
                        </motion.li>
                    )) : (
                        <motion.li key="single" className="counseling-card" variants={itemVariants} style={{ maxWidth: '600px', width: '100%' }}>
                            <h3>{currentStages[currentStageIndex].stage}</h3>
                            <p className="counseling-card__desc">{currentStages[currentStageIndex].desc}</p>
                            <div className="counseling-card__advice">
                                <strong>Coping Strategy:</strong> {currentStages[currentStageIndex].advice}
                            </div>
                        </motion.li>
                    )}
                </motion.ul>
            </AnimatePresence>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                {!isExpanded ? (
                    <button className="btn btn--primary" onClick={() => setIsExpanded(true)}>
                        I'm ready. Show me all the stages.
                    </button>
                ) : (
                    <button className="btn btn--secondary" onClick={() => { setIsExpanded(false); setCurrentStageIndex(0); }}>
                        I need to take a step back.
                    </button>
                )}
            </div>

            <div style={{ marginTop: '5rem' }}>
                <div className="page__header" style={{ marginBottom: '0' }}>
                    <h2>Counseling Services</h2>
                    <p>Additional premium resources to aid your spiritual recovery.</p>
                </div>
                <section className="features">
                    <Link to="/obituary-templates" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiScrollQuill /></div>
                            <h3>Obituary Templates</h3>
                            <p>Beautifully crafted, pre-written obituaries for your local classifieds. Honor the exact top-tube geometry and emotional impact your bike had on your life.</p>
                        </motion.div>
                    </Link>
                    <Link to="/grief-articles" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiOpenBook /></div>
                            <h3>Grief Articles</h3>
                            <p>Explore our peer-reviewed library dissecting the psychological impact of seeing a stranger riding your bike two weeks later and knowing there's nothing you can do.</p>
                        </motion.div>
                    </Link>
                    <Link to="/online-medium" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiCrystalBall /></div>
                            <h3>Personal Medium</h3>
                            <p>Connect with an automated online medium who can channel online the remaining spirit of your bicycle, helping you finally say goodbye to its ghost.</p>
                        </motion.div>
                    </Link>
                </section>
                
            </div>
            <BannerAdvert />
        </div>
    );
};

export default GriefCounseling;

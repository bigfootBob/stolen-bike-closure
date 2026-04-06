import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward, IoPause, IoPlay } from 'react-icons/io5';
import { GiScrollQuill, GiOpenBook, GiCrystalBall } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation('griefcounseling');
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

            <div style={{ marginTop: '0rem' }}>
                <div className="page__header" style={{ marginBottom: '0' }}>
                    <h2>{t('services.title')}</h2>
                    <p>{t('services.subtitle')}</p>
                </div>
                <section className="features">
                    <Link to="/obituary-templates" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiScrollQuill /></div>
                            <h3>{t('services.obituary.title')}</h3>
                            <p>{t('services.obituary.body')}</p>
                        </motion.div>
                    </Link>
                    <Link to="/grief-articles" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiOpenBook /></div>
                            <h3>{t('services.articles.title')}</h3>
                            <p>{t('services.articles.body')}</p>
                        </motion.div>
                    </Link>
                    <Link to="/online-medium" style={{ textDecoration: 'none' }}>
                        <motion.div className="feature-card" whileHover={{ y: -5 }}>
                            <div className="feature-card__icon"><GiCrystalBall /></div>
                            <h3>{t('services.medium.title')}</h3>
                            <p>{t('services.medium.body')}</p>
                        </motion.div>
                    </Link>
                </section>
                
            </div>

            <div className="page__header">
                <h2>{t('stages.title')}</h2>
                <p>{t('stages.subtitle')}</p>
                <div className="stages-controls" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={handlePrev} aria-label={t('stages.controls.prev')} style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <IoChevronBack size={18} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={() => setIsPaused(!isPaused)} aria-label={isPaused ? t('stages.controls.play') : t('stages.controls.pause')} style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        {isPaused ? <IoPlay size={18} style={{ marginLeft: '2px' }} /> : <IoPause size={18} />}
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.95 }} onClick={handleNext} aria-label={t('stages.controls.next')} style={{ background: 'var(--color-surface)', color: 'var(--color-text-main)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <IoChevronForward size={18} />
                    </motion.button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    {!isExpanded ? (
                        <button className="btn btn--primary" onClick={() => setIsExpanded(true)}>
                            {t('stages.show_all')}
                        </button>
                    ) : (
                        <button className="btn btn--secondary" onClick={() => { setIsExpanded(false); setCurrentStageIndex(0); }}>
                            {t('stages.step_back')}
                        </button>
                    )}
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
                                <strong>{t('stages.coping_strategy')}</strong> {item.advice}
                            </div>
                        </motion.li>
                    )) : (
                        <motion.li key="single" className="counseling-card" variants={itemVariants} style={{ maxWidth: '600px', width: '100%' }}>
                            <h3>{currentStages[currentStageIndex].stage}</h3>
                            <p className="counseling-card__desc">{currentStages[currentStageIndex].desc}</p>
                            <div className="counseling-card__advice">
                                <strong>{t('stages.coping_strategy')}</strong> {currentStages[currentStageIndex].advice}
                            </div>
                        </motion.li>
                    )}
                </motion.ul>
            </AnimatePresence>
 
            <BannerAdvert />
        </div>
    );
};

export default GriefCounseling;

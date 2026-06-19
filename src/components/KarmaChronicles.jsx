import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BannerAdvert from './BannerAdvert';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/SubPages.scss';

const getKarmaClass = (key) => {
    switch(key) {
        case 'immediate':     return 'level-immediate';
        case 'psychological': return 'level-psychological';
        case 'slow-burn':     return 'level-slow-burn';
        default:              return '';
    }
};

const KarmaChronicles = () => {
    const { t } = useTranslation('karmachronicles');
    const stories = t('stories', { returnObjects: true });
    const [selectedStory, setSelectedStory] = useState(null);
    const triggerRef = useRef(null);
    const closeBtnRef = useRef(null);
    const modalRef = useRef(null);

    const openStory = (story, trigger) => {
        triggerRef.current = trigger;
        setSelectedStory(story);
    };

    const closeStory = () => {
        setSelectedStory(null);
        if (triggerRef.current) {
            triggerRef.current.focus();
            triggerRef.current = null;
        }
    };

    // Move focus into modal when it opens
    useEffect(() => {
        if (selectedStory && closeBtnRef.current) {
            closeBtnRef.current.focus();
        }
    }, [selectedStory]);

    // Trap focus within the modal
    const handleModalKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeStory();
            return;
        }
        if (e.key === 'Tab' && modalRef.current) {
            const focusable = Array.from(
                modalRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        }
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>{t('ui.title')}</h2>
                <p>{t('ui.subtitle')}</p>
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
                        onClick={(e) => openStory(story, e.currentTarget)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openStory(story, e.currentTarget);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="karma-card__badge">
                            {t('ui.case_file', { number: index + 401 })}
                        </div>

                        <h3>{story.title}</h3>
                        <p className="karma-card__summary">
                            {story.summary}
                        </p>

                        <div className="karma-card__level">
                            {t('ui.karma_level')}
                            <span className={getKarmaClass(story.karmaLevelKey)}>
                                {story.karmaLevel}
                            </span>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
                <Link to="/submit-story" className="btn btn--primary">
                    {t('ui.submit_story')}
                </Link>
                <Link to="/build-story" className="btn btn--secondary">
                    {t('ui.build_story')}
                </Link>
            </div>

            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeStory}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '2rem' }}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="story-modal-title"
                            ref={modalRef}
                            onKeyDown={handleModalKeyDown}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-text-muted)', padding: '3rem', borderRadius: '16px', maxWidth: '600px', width: '100%', position: 'relative', overflowY: 'auto', maxHeight: '90vh' }}
                        >
                            <button
                                ref={closeBtnRef}
                                onClick={closeStory}
                                style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--color-text-main)', fontSize: '1.5rem', cursor: 'pointer' }}
                                aria-label={t('ui.close_modal')}
                            >
                                &times;
                            </button>
                            <h2 id="story-modal-title" style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2rem' }}>{selectedStory.title}</h2>
                            <p style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontStyle: 'italic', fontSize: '1.1rem' }}>"{selectedStory.summary}"</p>
                            <div style={{ color: 'var(--color-text-main)', lineHeight: '1.8' }}>
                                {selectedStory.story.split('\n\n').map((paragraph, i) => (
                                    <p key={i} style={{ marginTop: i > 0 ? '1rem' : 0 }}>{paragraph}</p>
                                ))}
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

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/SubPages.scss';
import '../styles/BuildStory.scss';

const H = ({ children }) => <span className="build-story__highlight">{children}</span>;

// Parses "Hello {{name}}, you are a {{adj|upper}} person." into React nodes,
// wrapping each {{token}} in <H> and applying |upper if present.
const renderTemplate = (str, values) =>
    str.split(/(\{\{[^}]+\}\})/).map((part, i) => {
        const match = part.match(/^\{\{([^|}\s]+)(\|upper)?\}\}$/);
        if (!match) return part;
        const val = values[match[1]] ?? '';
        return <H key={i}>{match[2] ? val.toUpperCase() : val}</H>;
    });

const SECTION_DEFS = [
    { key: 'specs',   badge: '1', modifier: 'specs',   fieldKeys: ['bikeAdj', 'bikeType', 'bikeNickname', 'lockType'] },
    { key: 'villain', badge: '2', modifier: 'villain', fieldKeys: ['thiefInsult', 'thiefItem', 'thiefSpeed', 'crimeVerb', 'crimePlace', 'crimeSound'] },
    { key: 'karma',   badge: '3', modifier: 'karma',   fieldKeys: ['trapFeature', 'minorInconvenience', 'ultimateFate'] },
];

const ALL_KEYS = SECTION_DEFS.flatMap(s => s.fieldKeys);
const EMPTY = Object.fromEntries(ALL_KEYS.map(k => [k, '']));

const BuildStory = () => {
    const { t } = useTranslation('buildastory');
    const templates = useMemo(() => t('templates', { returnObjects: true }), [t]);

    const [values, setValues] = useState(EMPTY);
    const [resultIndex, setResultIndex] = useState(null);
    const [showErrors, setShowErrors] = useState(false);

    const emptyKeys = ALL_KEYS.filter(k => !values[k].trim());
    const isComplete = emptyKeys.length === 0;

    const handleChange = (key, val) => setValues(prev => ({ ...prev, [key]: val }));

    const handleGenerate = () => {
        if (!isComplete) { setShowErrors(true); return; }
        setShowErrors(false);
        setResultIndex(Math.floor(Math.random() * templates.length));
    };

    const handleRegenerate = () => {
        let next;
        do { next = Math.floor(Math.random() * templates.length); }
        while (next === resultIndex && templates.length > 1);
        setResultIndex(next);
    };

    const currentTemplate = resultIndex !== null ? templates[resultIndex] : null;

    return (
        <div className="page">
            <div className="page__header">
                <h2>{t('ui.title')}</h2>
                <p>{t('ui.subtitle')}</p>
            </div>

            <div className="build-story__sections">
                {SECTION_DEFS.map(section => (
                    <div key={section.key} className="build-story__section">
                        <div className="build-story__section-header">
                            <div className={`build-story__section-badge build-story__section-badge--${section.modifier}`}>
                                {section.badge}
                            </div>
                            <div>
                                <p className="build-story__section-title">{t(`sections.${section.key}.title`)}</p>
                                <p className="build-story__section-subtitle">{t(`sections.${section.key}.subtitle`)}</p>
                            </div>
                        </div>
                        <div className="build-story__fields">
                            {section.fieldKeys.map(fieldKey => (
                                <div key={fieldKey} className="build-story__field">
                                    <label className="build-story__label">{t(`fields.${fieldKey}.label`)}</label>
                                    <input
                                        className={`build-story__input${showErrors && !values[fieldKey].trim() ? ' build-story__input--error' : ''}`}
                                        type="text"
                                        placeholder={t(`fields.${fieldKey}.placeholder`)}
                                        value={values[fieldKey]}
                                        onChange={e => handleChange(fieldKey, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="build-story__generate">
                <motion.button
                    className="btn btn--primary"
                    onClick={handleGenerate}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    {t('ui.generate_button')}
                </motion.button>
                {showErrors && !isComplete && (
                    <p className="build-story__error">
                        {t(emptyKeys.length === 1 ? 'ui.error_one' : 'ui.error_other', { count: emptyKeys.length })}
                    </p>
                )}
            </div>

            <AnimatePresence mode="wait">
                {currentTemplate && (
                    <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                    >
                        <div className="build-story__result-card">
                            <div className="build-story__result-label">{currentTemplate.name}</div>
                            <p className="build-story__result-text">
                                {renderTemplate(currentTemplate.story, values)}
                            </p>
                            <div className="build-story__result-actions">
                                <button className="btn btn--secondary" onClick={handleRegenerate}>
                                    {t('ui.try_different')}
                                </button>
                                <button className="btn btn--secondary" onClick={() => { setResultIndex(null); setValues(EMPTY); setShowErrors(false); }}>
                                    {t('ui.start_over')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BuildStory;

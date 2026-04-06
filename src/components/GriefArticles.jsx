import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GiOpenBook } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import '../styles/SubPages.scss';

const GriefArticles = () => {
    const { t } = useTranslation('griefarticles');
    const articles = useMemo(() => t('articles', { returnObjects: true }), [t]);
    const [pendingMessage, setPendingMessage] = useState(false);

    const handleClick = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            setPendingMessage(true);
            setTimeout(() => setPendingMessage(false), 3000);
        }
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>{t('header.title')}</h2>
                <p>{t('header.subtitle')}</p>
            </div>

            <div className="counseling-list">
                {articles.map((article) => (
                    <motion.div key={article.id} className="counseling-card" whileHover={{ scale: 1.02 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <GiOpenBook size={24} color="var(--color-accent)" />
                            <h3 style={{ margin: 0 }}>{article.title}</h3>
                        </div>
                        <p className="counseling-card__desc">{article.description}</p>
                        <div className="counseling-card__advice">
                            <strong>{t('header.author_label')}</strong> {article.author}
                        </div>
                        <button
                            className="btn btn--secondary"
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => handleClick(article.url)}
                        >
                            {article.url ? t('header.read_article_external') : t('header.read_article')}
                        </button>
                    </motion.div>
                ))}
            </div>

            {pendingMessage && (
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-primary)' }}>
                    {t('header.pending')}
                </p>
            )}
        </div>
    );
};

export default GriefArticles;

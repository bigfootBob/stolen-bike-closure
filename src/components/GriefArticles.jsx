import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiOpenBook } from 'react-icons/gi';
import articles from '../data/griefarticles.json';
import '../styles/SubPages.scss';

const GriefArticles = () => {
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
                <h2>Grief Articles</h2>
                <p>Peer-reviewed literature on the psychological impact of losing your bicycle.</p>
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
                            <strong>Author:</strong> {article.author}
                        </div>
                        <button
                            className="btn btn--secondary"
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => handleClick(article.url)}
                        >
                            {article.url ? 'Read Article ↗' : 'Read Article'}
                        </button>
                    </motion.div>
                ))}
            </div>

            {pendingMessage && (
                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-primary)' }}>
                    Full article pending publication. Check back soon.
                </p>
            )}
        </div>
    );
};

export default GriefArticles;

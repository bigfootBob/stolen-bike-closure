import React from 'react';
import { motion } from 'framer-motion';
import { GiOpenBook } from 'react-icons/gi';
import '../styles/SubPages.scss';

const GriefArticles = () => {
    return (
        <div className="page">
            <div className="page__header">
                <h2>Grief Articles</h2>
                <p>Peer-reviewed literature on the psychological impact of losing your bicycle.</p>
            </div>

            <div className="counseling-list">
                <motion.div className="counseling-card" whileHover={{ scale: 1.02 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiOpenBook size={24} color="var(--color-accent)" />
                        <h3 style={{ margin: 0 }}>The Phantom Pedal Phenomenon</h3>
                    </div>
                    <p className="counseling-card__desc">
                        A clinical look at why you still instinctively kick your leg out to catch a nonexistent kickstand when waiting at crosswalks on foot.
                    </p>
                    <div className="counseling-card__advice">
                        <strong>Author:</strong> Dr. H. Handlebars, PhD in Commuter Psychology
                    </div>
                    <button className="btn btn--secondary" style={{ marginTop: '1.5rem' }} onClick={() => alert('Full article pending publication... Check back soon!')}>Read Article</button>
                </motion.div>

                <motion.div className="counseling-card" whileHover={{ scale: 1.02 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiOpenBook size={24} color="var(--color-accent)" />
                        <h3 style={{ margin: 0 }}>Craigslist Paranoia</h3>
                    </div>
                    <p className="counseling-card__desc">
                        Understanding the compulsive need to refresh local classifieds at 3 AM looking for a 2018 Trek Marlin 5 that "kinda looks like yours even though the picture is blurry."
                    </p>
                    <div className="counseling-card__advice">
                        <strong>Author:</strong> The Coalition for Refined Searching Algorithms
                    </div>
                    <button className="btn btn--secondary" style={{ marginTop: '1.5rem' }} onClick={() => alert('Full article pending publication... Check back soon!')}>Read Article</button>
                </motion.div>

                <motion.div className="counseling-card" whileHover={{ scale: 1.02 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <GiOpenBook size={24} color="var(--color-accent)" />
                        <h3 style={{ margin: 0 }}>Coping With "Who Takes Just the Wheel?"</h3>
                    </div>
                    <p className="counseling-card__desc">
                        An exploration into the deep, unresolved existential dread when you return to the rack to find your frame, one wheel, and absolutely no logic behind what just occurred.
                    </p>
                    <div className="counseling-card__advice">
                        <strong>Author:</strong> Prof. S. Spokes
                    </div>
                    <button className="btn btn--secondary" style={{ marginTop: '1.5rem' }} onClick={() => alert('Full article pending publication... Check back soon!')}>Read Article</button>
                </motion.div>
            </div>
        </div>
    );
};

export default GriefArticles;

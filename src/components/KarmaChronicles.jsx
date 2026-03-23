import React from 'react';
import { motion } from 'framer-motion';
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
        </div>
    );
};

export default KarmaChronicles;

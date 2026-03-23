import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const stages = [
    {
        stage: '1. Denial',
        desc: '"I probably just parked it on the next block. Or maybe it\'s invisible today."',
        advice: 'Keep walking around the block in circles. It builds calf muscles.'
    },
    {
        stage: '2. Anger',
        desc: '"I hope the thief rides it into a volcano."',
        advice: 'Scream into a pillow. Or write a strongly worded Yelp review for the sidewalk.'
    },
    {
        stage: '3. Walking',
        desc: '"Walking is natural. Humans have walked for millennia. I love walking. It takes 45 minutes to get milk now."',
        advice: 'Invest in good shoes. You live in them now.'
    },
    {
        stage: '4. Bus Fare',
        desc: '"$2.75? For a ride that smells like unwashed gym socks?"',
        advice: 'Accept that public transit is your new chauffeur.'
    },
    {
        stage: '5. Acceptance',
        desc: '"It was a nice bike. It belongs to the universe now. (And also Craig form Craigslist)."',
        advice: 'Buy a U-lock next time. A real one.'
    }
];

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
    return (
        <div className="page">
            <div className="page__header">
                <h2>The 5 Stages of Bike Grief</h2>
                <p>Processing the loss of your two-wheeled companion.</p>
            </div>

            <motion.ul 
                className="counseling-list"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {stages.map((item, index) => (
                    <motion.li key={index} className="counseling-card" variants={itemVariants}>
                        <h3>{item.stage}</h3>
                        <p className="counseling-card__desc">{item.desc}</p>
                        <div className="counseling-card__advice">
                            <strong>Coping Strategy:</strong> {item.advice}
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default GriefCounseling;

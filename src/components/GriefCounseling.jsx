import React from 'react';

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

const GriefCounseling = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">The 5 Stages of Bike Grief</h2>
                <p className="text-xl text-gray-400">Processing the loss of your two-wheeled companion.</p>
            </div>

            <ul className="space-y-6">
                {stages.map((item, index) => (
                    <li key={index} className="bg-noir-gray p-6 rounded-lg border border-noir-gray hover:border-spirit-blue/50 transition-all hover:shadow-[0_0_15px_rgba(165,180,252,0.1)] group">
                        <h3 className="text-2xl font-serif text-spirit-blue mb-2 group-hover:text-wellness-glow transition-colors">
                            {item.stage}
                        </h3>
                        <p className="text-lg text-white mb-4 italic">
                            {item.desc}
                        </p>
                        <div className="text-sm text-gray-400 border-l-2 border-spirit-blue/30 pl-4 py-1">
                            <span className="text-spirit-blue font-bold uppercase text-xs tracking-wider">Coping Strategy:</span> {item.advice}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GriefCounseling;

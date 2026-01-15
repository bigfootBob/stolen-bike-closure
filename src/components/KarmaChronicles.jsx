import React from 'react';

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

const KarmaChronicles = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Karma Chronicles</h2>
                <p className="text-xl text-gray-400">Because sometimes the universe strikes back.</p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
                {stories.map((story, index) => (
                    <article key={index} className="bg-noir-black bg-opacity-50 p-8 rounded-xl border border-noir-gray hover:border-alert-red/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-noir-gray px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 rounded-bl-lg">
                            Case File #{index + 401}
                        </div>

                        <h3 className="text-3xl font-serif text-white mb-4">
                            {story.title}
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {story.summary}
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-500 uppercase">Karma Level:</span>
                            <span className={`text-sm font-bold px-2 py-0.5 rounded ${story.karmaLevel === 'Immediate' ? 'bg-alert-red/20 text-red-400' :
                                    story.karmaLevel === 'Psychological' ? 'bg-spirit-blue/20 text-spirit-blue' :
                                        'bg-wellness-glow/20 text-wellness-glow'
                                }`}>
                                {story.karmaLevel}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default KarmaChronicles;

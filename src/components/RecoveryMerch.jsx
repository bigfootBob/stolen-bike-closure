import React from 'react';

const products = [
    {
        id: 1,
        name: '"My Other Bike is Stolen" Tee',
        price: '$28.00',
        caption: 'Wear your loss with pride.',
        color: 'bg-gray-800'
    },
    {
        id: 2,
        name: '"Separation Anxiety" Sticker Pack',
        price: '$12.00',
        caption: 'Stick them on your bus pass.',
        color: 'bg-gray-700'
    },
    {
        id: 3,
        name: 'Phantom Limb Leg Strap',
        price: '$18.00',
        caption: 'For that pant leg that no longer needs protecting.',
        color: 'bg-gray-600'
    },
    {
        id: 4,
        name: 'Empty U-Lock Paperweight',
        price: '$45.00',
        caption: 'A heavy reminder of what used to be.',
        color: 'bg-gray-900'
    }
];

const RecoveryMerch = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Recovery Merch</h2>
                <p className="text-xl text-gray-400">Retail therapy is cheaper than a new bike. (Barely).</p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <li key={product.id} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-wellness-glow/50 transition-all group flex flex-col">
                        <div
                            role="img"
                            aria-label={`Placeholder image for ${product.name}`}
                            className={`aspect-square ${product.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                        >
                            {/* Abstract Placeholder Art */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>
                            <span className="text-4xl text-white/20 font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                                SOLD OUT
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-spirit-blue transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-sm text-gray-400 italic mb-4 flex-grow">
                            {product.caption}
                        </p>

                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                            <span className="font-mono text-wellness-glow">{product.price}</span>
                            <button className="text-xs uppercase font-bold tracking-wider hover:text-spirit-blue transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecoveryMerch;

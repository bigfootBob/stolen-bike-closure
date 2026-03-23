import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const products = [
    {
        id: 1,
        name: '"My Other Bike is Stolen" Tee',
        price: '$28.00',
        caption: 'Wear your loss with pride.',
    },
    {
        id: 2,
        name: '"Separation Anxiety" Sticker Pack',
        price: '$12.00',
        caption: 'Stick them on your bus pass.',
    },
    {
        id: 3,
        name: 'Phantom Limb Leg Strap',
        price: '$18.00',
        caption: 'For that pant leg that no longer needs protecting.',
    },
    {
        id: 4,
        name: 'Empty U-Lock Paperweight',
        price: '$45.00',
        caption: 'A heavy reminder of what used to be.',
    }
];

const RecoveryMerch = () => {
    return (
        <div className="page">
            <div className="page__header">
                <h2>Recovery Merch</h2>
                <p>Retail therapy is cheaper than a new bike. (Barely).</p>
            </div>

            <ul className="merch-grid">
                {products.map((product, index) => (
                    <motion.li 
                        key={product.id} 
                        className="merch-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="merch-card__image">
                            <span className="sold-out">SOLD OUT</span>
                        </div>

                        <h3>{product.name}</h3>
                        <p className="merch-card__caption">{product.caption}</p>

                        <div className="merch-card__footer">
                            <span className="price">{product.price}</span>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default RecoveryMerch;

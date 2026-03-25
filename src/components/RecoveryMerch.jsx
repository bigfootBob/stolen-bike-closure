import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const RecoveryMerch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = import.meta.env.VITE_FOURTHWALL_STOREFRONT_TOKEN;
                const res = await fetch(`https://storefront-api.fourthwall.com/v1/collections/all/products?storefront_token=${token}&page=0&size=50`);
                const data = await res.json();
                if (data.results) {
                    setProducts(data.results);
                }
            } catch (error) {
                console.error("Failed to fetch merch:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const stripHtml = (html) => {
        if (!html) return '';
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>Recovery Merch</h2>
                <p>Retail therapy is cheaper than a new bike. (Barely).</p>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-primary)' }}>Loading inventory...</div>
            ) : (
                <ul className="merch-grid">
                    {products.map((product, index) => {
                        const price = product.variants && product.variants.length > 0 
                            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: product.variants[0].unitPrice.currency }).format(product.variants[0].unitPrice.value)
                            : '$0.00';
                            
                        const imageUrl = product.images && product.images.length > 0 ? product.images[0].url : '';
                        
                        return (
                            <motion.li 
                                key={product.id} 
                                className="merch-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => window.open(`${import.meta.env.VITE_FOURTHWALL_STOREFRONT_URL}/products/${product.slug}`, '_blank')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { 
                                    if (e.key === 'Enter' || e.key === ' ') { 
                                        e.preventDefault(); 
                                        window.open(`${import.meta.env.VITE_FOURTHWALL_STOREFRONT_URL}/products/${product.slug}`, '_blank');
                                    } 
                                }}
                            >
                                <div className="merch-card__image" style={{ background: 'transparent' }}>
                                    {imageUrl ? (
                                        <img src={imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    ) : (
                                        <div style={{ color: 'var(--color-text-muted)' }}>No Image</div>
                                    )}
                                </div>

                                <h3>{product.name}</h3>
                                <p className="merch-card__caption">{stripHtml(product.description).substring(0, 100)}{stripHtml(product.description).length > 100 ? '...' : ''}</p>

                                <div className="merch-card__footer">
                                    <span className="price">{price}</span>
                                    <button className="add-to-cart" tabIndex={-1}>View Store</button>
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default RecoveryMerch;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SubPages.scss';

const RecoveryMerch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setError('');
                const res = await fetch('/api/merch-products');
                if (!res.ok) {
                    throw new Error(`Merch API failed with ${res.status}`);
                }
                const data = await res.json();
                if (data.results && Array.isArray(data.results)) {
                    setProducts(data.results);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                if (import.meta.env.DEV) console.error("Failed to fetch merch:", error);
                setError('We could not load the merch catalog right now. Please try again shortly.');
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

    const openProductInNewTab = (slug) => {
        const storefrontUrl = import.meta.env.VITE_FOURTHWALL_STOREFRONT_URL;
        if (!storefrontUrl || !slug) return;
        const targetUrl = `${storefrontUrl}/products/${slug}`;
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="page">
            <div className="page__header">
                <h2>Recovery Merch</h2>
                <p>Retail therapy is cheaper than a new bike. (Barely).</p>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-primary)' }}>Loading inventory...</div>
            ) : error ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-main)' }}>{error}</div>
            ) : (
                <ul className="merch-grid">
                    {products.map((product, index) => {
                        const price = product.variants && product.variants.length > 0 
                            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: product.variants[0].unitPrice.currency }).format(product.variants[0].unitPrice.value)
                            : '$0.00';
                            
                        const rawImageUrl = product.images && product.images.length > 0 ? product.images[0].url : '';
                        const imageUrl = /^https:\/\/[^/]*fourthwall\.com\//i.test(rawImageUrl) ? rawImageUrl : '';
                        
                        return (
                            <motion.li 
                                key={product.id} 
                                className="merch-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => openProductInNewTab(product.slug)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { 
                                    if (e.key === 'Enter' || e.key === ' ') { 
                                        e.preventDefault(); 
                                        openProductInNewTab(product.slug);
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
                                    <button
                                        className="add-to-cart"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openProductInNewTab(product.slug);
                                        }}
                                    >
                                        View Store
                                    </button>
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

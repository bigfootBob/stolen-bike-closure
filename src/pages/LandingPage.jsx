import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiHeartWings, GiCrystalBall } from 'react-icons/gi';
import { FaUsersGear } from 'react-icons/fa6';
import '../styles/LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="landing">
            <section className="hero">
                <div className="hero__content">
                    <motion.h1 
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        They took your wheels.<br />
                        Don't let them take your soul.
                    </motion.h1>
                    
                    <motion.p 
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        'Stolen Bike Closure they took your wheels. In your partica' image with your your wheels, men ærtosisuitor hana wheals in motating pompettion and emotionals heart in deep insight insight to you.
                    </motion.p>
                    
                    <motion.div 
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/grief-counseling" className="btn btn--primary">
                            START HEALING
                        </Link>
                        <Link to="/karma-chronicles" className="btn btn--secondary">
                            REVENGE FANTASIES
                        </Link>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="hero__image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <picture>
                        <source srcSet="https://res.cloudinary.com/bobmasondesign/image/upload/v1774302096/hero-bike-image_gzjqja.webp" type="image/webp" />
                        <img src="https://res.cloudinary.com/bobmasondesign/image/upload/v1774302096/hero-bike-image_ofsvz3.jpg" alt="Bike Ascending to Heaven" className="hero__image" />
                    </picture>
                    <div className="hero__image-inner-border"></div>
                </motion.div>
            </section>

            <section className="features">
                <motion.div className="feature-card" whileHover={{ y: -5 }}>
                    <div className="feature-card__icon"><GiHeartWings /></div>
                    <h3>Heartfelt Guidance</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </motion.div>
                <motion.div className="feature-card" whileHover={{ y: -5 }}>
                    <div className="feature-card__icon"><FaUsersGear /></div>
                    <h3>Community Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </motion.div>
                <motion.div className="feature-card" whileHover={{ y: -5 }}>
                    <div className="feature-card__icon"><GiCrystalBall /></div>
                    <h3>Personal Medium</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </motion.div>
            </section>
        </div>
    );
};

export default LandingPage;

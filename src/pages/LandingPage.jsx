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
                        Here we honor a ride gone too soon, praying that your frame rests in peace and your thief rests in jail. Though your handlebars may never feel your grip again, may the person who took your ride find flat tires and karmic justice.
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
                <Link to="/grief-counseling" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><GiHeartWings /></div>
                        <h3>Heartfelt Guidance</h3>
                        <p>Navigating the aftermath of a theft can be overwhelming. We're here to help you walk through the valley of the shadow of an empty bike rack, offering a steady hand as you fill out police reports that will never be read & insurance claims that will definitely be denied. Providing emotional scaffolding to stop checking bike listings every 5 minutes.</p>
                    </motion.div>
                </Link>
                <Link to="/karma-chronicles" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><FaUsersGear /></div>
                        <h3>Community Support</h3>
                        <p>You do not have to walk this path alone. Join a fellowship of those who understand the unique sting of a severed U-lock. Our support circles provide a safe space to share stories of your favorite rides, vent your frustrations toward local pawn shops, and collectively pray for the swift mechanical failure of every stolen drivetrain in the city.</p>
                    </motion.div>
                </Link>
                <Link to="/online-medium" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><GiCrystalBall /></div>
                        <h3>Personal Medium</h3>
                        <p>For those seeking a deeper connection to the "other side," our specialists help you find closure through digital séance. We help you visualize your bike’s new life. Through mindful acceptance, we help you release the spirit of your Carbon Fiber companion so that you can heal & maybe even eventually open your heart to a new ride.</p>
                    </motion.div>
                </Link>
            </section>
        </div>
    );
};

export default LandingPage;

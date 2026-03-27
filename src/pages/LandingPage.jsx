import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiHeartWings, GiCrystalBall } from 'react-icons/gi';
import { FaUsersGear } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import BannerAdvert from '../components/BannerAdvert';
import '../styles/LandingPage.scss';

const LandingPage = () => {
    const { t } = useTranslation('landing');

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
                        {t('hero.title').split('\n').map((line, i, arr) => (
                            <React.Fragment key={i}>
                                {line}{i < arr.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/grief-counseling" className="btn btn--primary">
                            {t('hero.cta_primary')}
                        </Link>
                        <Link to="/karma-chronicles" className="btn btn--secondary">
                            {t('hero.cta_secondary')}
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
                        <img src="https://res.cloudinary.com/bobmasondesign/image/upload/v1774302096/hero-bike-image_ofsvz3.jpg" alt={t('hero.image_alt')} className="hero__image" />
                    </picture>
                    <div className="hero__image-inner-border"></div>
                </motion.div>
            </section>

            <section className="features">
                <Link to="/grief-counseling" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><GiHeartWings /></div>
                        <h3>{t('features.heartfelt.title')}</h3>
                        <p>{t('features.heartfelt.body')}</p>
                    </motion.div>
                </Link>
                <Link to="/karma-chronicles" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><FaUsersGear /></div>
                        <h3>{t('features.community.title')}</h3>
                        <p>{t('features.community.body')}</p>
                    </motion.div>
                </Link>
                <Link to="/online-medium" style={{ textDecoration: 'none' }}>
                    <motion.div className="feature-card" whileHover={{ y: -5 }}>
                        <div className="feature-card__icon"><GiCrystalBall /></div>
                        <h3>{t('features.medium.title')}</h3>
                        <p>{t('features.medium.body')}</p>
                    </motion.div>
                </Link>
            </section>
            <BannerAdvert />
        </div>
    );
};

export default LandingPage;

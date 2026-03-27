import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import merchAdWebp from '../assets/images/merch-ad.webp';
import merchAdJpg from '../assets/images/merch-ad.jpg';
import '../styles/BannerAdvert.scss';

const BannerAdvert = () => {
    const { t } = useTranslation('advertisement');

    return (
        <motion.div
            className="banner-advert"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Link to="/recovery-merch" className="banner-advert__link">
                <picture className="banner-advert__picture">
                    <source srcSet={merchAdWebp} type="image/webp" />
                    <img
                        src={merchAdJpg}
                        alt={t('merch_banner.image_alt')}
                        className="banner-advert__image"
                    />
                </picture>
                <div className="banner-advert__text">
                    <p className="banner-advert__eyebrow">{t('merch_banner.eyebrow')}</p>
                    <p className="banner-advert__tagline">{t('merch_banner.tagline')}</p>
                    <p className="banner-advert__body">{t('merch_banner.body')}</p>
                    <span className="banner-advert__cta">{t('merch_banner.cta')}</span>
                </div>
            </Link>
        </motion.div>
    );
};

export default BannerAdvert;

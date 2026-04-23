import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./Carousel.module.scss";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';

export default () => {

    const {t} = useTranslation();

  return (
    <div className={styles.wrapper}>
        <Swiper
        loop={true}
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide className={styles.swiperSlide}>{t('history.slide1')}</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>{t('history.slide2')}</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>{t('history.slide3')}</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>{t('history.slide4')}</SwiperSlide>
        </Swiper>
    </div>
  );
};
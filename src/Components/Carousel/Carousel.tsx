import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Carousel.module.scss";
import InnerCarousel from '../InnerCarousel/InnerCarousel';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { useTranslation } from 'react-i18next';
import type { Slide } from '../../Models/Slide';

const Carousel = () => {

  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const { t } = useTranslation();

  useEffect( () => {
      const fetchData = async () => {
          const response = await fetch(`${import.meta.env.BASE_URL}history.json`);
          const data = await response.json();
          setSlides(data.slides);
      };
      fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {slides.length > 0 &&
        <Swiper
        loop={true}
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          0: { autoHeight: false, spaceBetween: 16 },
          500: { autoHeight: false, spaceBetween: 50 },
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <InnerCarousel 
                date={slide?.date} 
                title={`history.slides.slide${index + 1}.title`} 
                text={`history.slides.slide${index + 1}.text`} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      {slides.length > 0 && (
        <div className={styles.controls}>
          <div className={styles.controlRow}>
            <button
              type="button"
              aria-label={t("history.carousel.previous")}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span aria-hidden="true">←</span>
            </button>
            <output aria-live="polite" aria-atomic="true">
              {t("history.carousel.position", { current: activeIndex + 1, total: slides.length })}
            </output>
            <button
              type="button"
              aria-label={t("history.carousel.next")}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className={styles.progress} aria-hidden="true">
            <span style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
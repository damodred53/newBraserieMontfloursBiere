import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Carousel.module.scss";
import InnerCarousel from '../InnerCarousel/InnerCarousel';
import { useEffect, useState } from 'react';
import type { Slide } from '../../Models/Slide';

const Carousel = () => {

  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect( () => {
      const fetchData = async () => {
          const response = await fetch(`${import.meta.env.BASE_URL}/history.json`);
          const data = await response.json();
          setSlides(data.slides);
      };
      fetchData();
  }, []);

  console.log(slides);

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
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <InnerCarousel date={slide?.date} title={slide?.title} text={slide?.text} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Carousel;
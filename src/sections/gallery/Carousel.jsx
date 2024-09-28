import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import slide_image_1 from "/images/slide1.jpg";
import slide_image_2 from "/images/slide2.webp";
import slide_image_3 from "/images/slide3.jpg";
import slide_image_4 from "/images/slide1.jpg";
import slide_image_5 from "/images/slide2.webp";
import slide_image_6 from "/images/slide3.jpg";

function Carousel() {
  return (
    <div className="py-[30px]">
      <Swiper
        effect="coverflow" // Apply the coverflow effect
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative h-[30rem]"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_3}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_4}
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_5}
            alt="Slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover rounded-md"
            src={slide_image_6}
            alt="Slide 6"
          />
        </SwiperSlide>

        {/* Pagination
        <div className="swiper-pagination "></div> */}

        {/* Navigation buttons */}
        <div className="swiper-button-prev text-secondary p-[15px] hover:text-primary transition-all transition-300"></div>
        <div className="swiper-button-next text-secondary p-[15px] hover:text-primary transition-all transition-300"></div>
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination "></div>
    </div>
  );
}

export default Carousel;

/* Figure out pagination */

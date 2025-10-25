import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/1981111/pexels-photo-1981111.jpeg",
      text: "Keep Your Dog Warm This Winter ❄️",
    },
    {
      img: "https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg",
      text: "Soft Jackets for Your Lovely Cats 🐱",
    },
    {
      img: "https://images.pexels.com/photos/34418146/pexels-photo-34418146.jpeg",
      text: "Winter Grooming & Care Packages 🧼",
    },
    {
      img: "https://images.pexels.com/photos/34422349/pexels-photo-34422349.jpeg",
      text: "Winter Nutrition & Health Tips 🍲",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[200px] rounded-2xl shadow-2xl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full flex items-center justify-center">
              <img
                src={slide.img}
                alt={slide.text}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-white bg-opacity-30 rounded-xl"></div>
              <h2 className="absolute text-3xl md:text-4xl font-bold text-black z-10 text-center px-4">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

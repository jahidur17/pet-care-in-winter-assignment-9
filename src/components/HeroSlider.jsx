import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/j.jpg";
import img2 from "../assets/jj.jpg";
import img3 from "../assets/jjj.jpg";

const HeroSlider = () => {
  const slides = [
    { img: img1, text: "Keep Your Dog Warm This Winter ❄️" },
    { img: img2, text: "Soft Jackets for Your Lovely Cats 🐱" },
    { img: img3, text: "Winter Grooming & Care Packages 🧼" },
  ];

  return (
    <div className="w-11/12 mx-auto my-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px] rounded-xl shadow-lg"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full flex items-center justify-center">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.text}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
              {/* Text */}
              <h2 className="absolute text-3xl md:text-4xl font-bold text-white z-10 text-center px-4">
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

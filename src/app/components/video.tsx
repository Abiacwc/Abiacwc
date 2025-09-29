"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Play } from "lucide-react";

export default function video() {
  const slides = [
    { type: "video", src: "/videos/video1.mp4" },
    { type: "video", src: "/videos/video2.mp4" },
    { type: "image", src: "/video.jpg" },
  ];

  return (
    <section>
     <div className="bg-[#007B36] h-40 rotate-[0deg] flex justify-center items-center">
         <h1 className="font-montserrat text-white font-extrabold md:text-[4rem] leading-[40px] text-center">
          Picture Speaks

         </h1>
     </div>
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative border-12 border-black w-full h-full">
              {/* Background video or image */}
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt="slide"
                  fill
                  priority
                  className="object-cover"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#960A0A1A] to-[#960A0A]" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 transition">
                  <Play className="w-6 h-6" />
                  Play Video
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
}
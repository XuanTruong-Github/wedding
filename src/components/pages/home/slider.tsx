"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect } from "react";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

export default function Slider() {
  const images = [
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/templates/6174ef83a62963738e0a367c/9b7f4b9615b1beab8455ae6fbe11e5a3.jpg",
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/templates/6174ef83a62963738e0a367c/0a76b48021190c934f2a1c4ebb1f30fb.jpg",
  ];
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/sliders");
      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);
  return (
    <section className="w-full h-fit">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
      >
        <div className="absolute top-0 left-0 h-full w-full z-[2] grid place-items-center bg-black/30">
          <div className="text-white text-center">
            <h1
              className={cn(
                font.className,
                "text-[40px] flex flex-col sm:flex-row items-center justify-center text-white mb-6 sm:text-[52px]"
              )}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}
            >
              Xuân Trường
              <Image
                src="/images/heart.gif"
                width={64}
                height={64}
                alt="Heart"
                className="object-contain"
              />
              Tú Anh
            </h1>
            <p className="text-xs sm:text-sm">14 Tháng 1 Năm 2024</p>
          </div>
        </div>
        {images.map((item, key) => (
          <SwiperSlide key={key}>
            <div className="h-[500px] md:h-[600px] lg:h-[unset] lg:aspect-video relative">
              <Image
                src={item}
                alt="Slider"
                className="object-cover w-full h-full"
                width={800}
                height={800}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

type Props = {
  images: string[];
};
export default function Slider({ images }: Props) {
  const plugin = useRef(Autoplay({ jump: true }));
  return (
    <section className="w-full h-fit relative bg-invitation">
      <div className="absolute top-0 left-0 h-full w-full z-[1] grid place-items-center bg-black/20">
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
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="lg:container"
      >
        <CarouselContent>
          {images?.map((item, key) => (
            <CarouselItem key={key}>
              <Image
                src={item}
                alt="Ảnh cưới"
                className="object-contain w-full h-auto"
                width={1080}
                height={1080}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

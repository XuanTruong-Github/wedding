"use client";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

type Props = {
  image: string;
};
export default function Video({ image }: Props) {
  return (
    <section className="w-full bg-invitation relative">
      <div className="md:container">
        <Image
          src={image}
          width={1280}
          height={800}
          className="object-cover w-full"
          alt="Video-Background"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-[1] grid place-items-center bg-black/20">
        <div className="text-white text-center container">
          <h1
            className={cn(
              font.className,
              "text-4xl lg:text-6xl mb-4 text-white"
            )}
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}
          >
            Xem video cưới của chúng tôi
          </h1>
          <p className="text-xs sm:text-sm lg:text-base mb-4 lg:mb-6">
            Chúng tôi trân trọng mỗi khoảng khắc, mỗi trải nghiệm cùng nhau.
          </p>
          <Dialog>
            <DialogTrigger>
              <div className="rounded-full bg-white/90 h-12 w-12 grid place-items-center">
                <Play className="text-primary" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/H8Td-kQ_B4Y?si=BJxxJOjlwvBOI0Yw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState } from "react";

const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
export default function Album() {
  const imagesFake = [
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/galleries/653a6df922124fc204054dac/large.jpg",
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/galleries/653a6dd77fdc7bef190738ea/large.jpg",
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/galleries/65368760620218493a071d00/small.jpg",
    "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/galleries/65368765edd2c72d3f02b142/small.jpg",
  ];
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  return (
    <section id="gallery" className="container py-20 text-center">
      <Image
        src={"/images/flower.png"}
        alt="Couple"
        width={126}
        height={59}
        className="object-contain mx-auto mb-2"
      />

      <h2
        className={cn(
          "text-3xl font-bold italic mb-2 lg:text-4xl",
          font.className
        )}
      >
        Album Hình Cưới
      </h2>
      <p className="text-sm md:text-base mb-4">
        Cùng nhau trải nghiệm những bài học mới
      </p>
      <Button className="mb-6" asChild>
        <Link href={"/album"}>Xem Album</Link>
      </Button>
      <div className="columns-2 gap-2 space-y-2 sm:columns-3 sm:gap-3 sm:space-y-3 lg:space-y-4 lg:gap-4">
        {imagesFake.map((item, key) => (
          <div
            key={key}
            className="break-inside-avoid rounded overflow-hidden"
            onClick={() => setCurrentImage(item)}
          >
            <Image
              src={item}
              alt={"" + key}
              height={1080}
              width={1080}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <Dialog open={!!currentImage} onOpenChange={() => setCurrentImage(null)}>
        {!!currentImage && (
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Ảnh cưới của chúng tôi</DialogTitle>
            </DialogHeader>
            <Image
              src={currentImage}
              alt="Ảnh cưới"
              width={1080}
              height={1080}
              className="object-contain rounded"
            />
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

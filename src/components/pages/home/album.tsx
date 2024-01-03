"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState } from "react";

const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

type Props = {
  images: string[];
};
export default function Album({ images }: Props) {
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
        {images.map((item, key) => (
          <div
            key={key}
            className="break-inside-avoid rounded overflow-hidden cursor-pointer"
            onClick={() => setCurrentImage(item)}
          >
            <Image
              src={item}
              alt={"" + key}
              height={600}
              width={800}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <Dialog open={!!currentImage} onOpenChange={() => setCurrentImage(null)}>
        {!!currentImage && (
          <DialogContent className="bg-white p-0">
            <Image
              src={currentImage}
              alt="Ảnh cưới"
              width={800}
              height={600}
              className="object-contain rounded"
            />
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

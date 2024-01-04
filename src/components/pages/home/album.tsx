"use client";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

type Props = {
  images: string[];
};
export default function Album({ images }: Props) {
  return (
    <section id="gallery" className="container py-20 text-center">
      <Image
        src={"/images/flower.png"}
        alt="Couple"
        width={126}
        height={59}
        className="object-contain mx-auto h-auto mb-2"
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
          <Dialog key={key}>
            <DialogTrigger>
              <div className="break-inside-avoid rounded overflow-hidden cursor-pointer">
                <Image
                  src={item}
                  alt={"" + key}
                  height={600}
                  width={800}
                  sizes="100vw"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white p-0 w-[90%] sm:w-fit">
              <Image
                src={item}
                alt="Ảnh cưới"
                height={600}
                width={800}
                className="object-contain rounded h-auto"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

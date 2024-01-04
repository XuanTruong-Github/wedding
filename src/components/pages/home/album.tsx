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
      <div className="h-auto w-32 mx-auto">
        <Image
          src={"/images/flower.png"}
          alt="Couple"
          width={128}
          height={60}
          className="mb-2 w-full object-contain"
        />
      </div>

      <h2
        className={cn(
          "text-3xl font-bold italic mb-2 lg:text-4xl",
          font.className
        )}
      >
        Album Hình Cưới
      </h2>
      <p className="text-sm md:text-base">
        Cùng nhau trải nghiệm những bài học mới
      </p>
      <div className="columns-2 gap-2 md:columns-3 lg:columns-4 my-6">
        {images.map((item, key) => (
          <Dialog key={key}>
            <DialogTrigger>
              <div className="break-inside-avoid overflow-hidden cursor-pointer">
                <Image src={item} alt={"" + key} height={600} width={800} />
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white p-0 w-[90%] sm:w-fit">
              <Image
                src={item}
                alt="Ảnh cưới"
                height={600}
                width={800}
                className="object-contain"
                priority
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <Button asChild>
        <Link href={"/album"}>Xem Album</Link>
      </Button>
    </section>
  );
}

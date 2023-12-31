import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
type Props = {
  image: string;
};
export default function ThankYou({ image }: Props) {
  return (
    <footer className="h-[700px] grid place-items-center">
      <section className="text-center">
        <div className="relative aspect-square w-56 mb-4 overflow-hidden rounded-full md:mb-8 lg:w-80 lg:mb-10">
          <Image src={image} alt="Couple" width={600} height={600} />
        </div>
        <h2
          className={cn(
            font.className,
            "text-4xl font-bold sm:text-5xl md:text-6xl"
          )}
        >
          Thank you!
        </h2>
      </section>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
type Props = {
  className?: string;
};
export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "w-fit text-2xl lg:text-4xl flex items-center justify-center gap-1 font-bold",
        font.className,
        className
      )}
    >
      Xuân Trường
      <Image
        src="/images/heart.gif"
        width={50}
        height={50}
        alt="Heart"
        className="w-9 lg:w-[50px] object-contain"
      />
      Tú Anh
    </Link>
  );
}

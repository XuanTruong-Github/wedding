import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
type Props = {
  stories: {
    heading: string;
    date: string;
    content: string;
    image: string;
  }[];
};
export default function Story({ stories }: Props) {
  return (
    <section className="py-24 bg-gray-50 lg:py-32">
      <div className="container">
        <div className="text-center mb-9 md:w-3/4 mx-auto lg:mb-12">
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
              "text-2xl font-bold italic mb-2 md:text-4xl md:mb-4",
              font.className
            )}
          >
            Chuyện tình yêu
          </h2>
          <p className="text-sm leading-6 md:text-base md:leading-8 lg:text-lg lg:leading-9">
            Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả
            một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
          </p>
        </div>
        <div className="shadow-lg px-6 py-12 sm:p-[70px] bg-white">
          <ul
            className={cn(
              "relative",
              "before:absolute before:content-[''] before:w-[3px] before:h-full before:top-0 before:left-[calc(50%-1.5px)] before:bg-primary before:hidden",
              "sm:before:block",
              "after:hidden after:absolute after:bg-primary after:content-[''] after:w-5 after:h-5 after:top-0 after:rounded-full after:border-[3px] after:border-primary after:left-[calc(50%-10px)]",
              "sm:after:block"
            )}
          >
            {stories.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "pb-8 mb-8 md:pb-10 md:mb-10 sm:grid grid-cols-2 relative",
                  "before:hidden before:absolute before:content-[''] before:w-5 before:h-5 before:bottom-0 before:rounded-full before:border-[3px] before:border-primary before:left-[calc(50%-10px)]",
                  "sm:before:block",
                  index === stories.length - 1
                    ? "before:bg-primary"
                    : "before:bg-white",
                  "after:w-full after:content-[''] after:border-b-2 after:border-dashed after:border-primary after:absolute after:bottom-2 after:left-0",
                  "sm:after:w-[110px]",
                  index === 1
                    ? "sm:after:left-[calc(50%+40px)]"
                    : "sm:after:left-[calc(50%-140px)]"
                )}
              >
                <div
                  className={cn(
                    "mb-2 sm:mb-0",
                    index === 1
                      ? "sm:order-last sm:pl-10"
                      : "sm:pr-10 sm:text-end"
                  )}
                >
                  <h3 className="text-xl font-medium mb-2 md:text-2xl md:leading-10">
                    {item.heading}
                  </h3>
                  <time className="text-primary">{item.date}</time>
                  <p className="mt-6 text-sm leading-7 md:text-base md:leading-9">
                    {item.content}
                  </p>
                </div>
                <Image
                  src={item.image}
                  alt={item.heading}
                  className={cn(
                    "h-auto object-contain",
                    index === 1 ? "sm:pr-10" : "sm:pl-10"
                  )}
                  width={600}
                  height={800}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

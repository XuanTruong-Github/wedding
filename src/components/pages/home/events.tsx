import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
export default function Events() {
  const events = [
    {
      title: "Lễ cưới nhà chú rể",
      image: "/images/groom-event.png",
      time: "16:00 CH, 14/01/2024",
      address:
        "Số nhà 22, Ngõ 177, Đường Trần Hưng Đạo, Phường Chi Lăng, Thành Phố Lạng Sơn",
      map: "https://maps.app.goo.gl/4t9LgthtTHMQ9Q5h9",
    },
    {
      title: "Lễ cưới nhà cô dâu",
      image: "/images/bride-event.png",
      time: "10:00 AM, 14/01/2024",
      address:
        "Tổ dân phố Thịnh Tiến, Thị trấn Sơn Dương, Huyện Sơn Dương, Tỉnh Tuyên Quang",
      map: "https://maps.app.goo.gl/kNhf1EVsZtUAQpmP8",
    },
  ];
  return (
    <section id="events" className="bg-background">
      <div className="container text-center py-20">
        <h2 className={cn("text-4xl mb-3 md:text-5xl md:mb-4", font.className)}>
          Sự Kiện Cưới
        </h2>
        <p className="leading-6 mb-8 sm:mb-10">
          Chúng tôi cùng nhau đồng hành trên mỗi chặng đường. Dù có khó khăn, dù
          có gian khổ chúng tôi đều có nhau.
        </p>
        <div className="md:flex md:items-center md:justify-center md:gap-4 lg:gap-10">
          {events.map((event, key) => (
            <article
              key={key}
              className="bg-white py-12 px-5 mx-auto mb-6 sm:w-96 md:m-0 rounded"
            >
              <h3 className="uppercase font-bold text-lg mb-6 border-b-2 w-fit mx-auto border-primary pb-2 text-primary md:text-xl">
                {event.title}
              </h3>
              <div className="relative  overflow-hidden rounded"></div>
              <Image
                src={event.image}
                className="aspect-square mb-4"
                width={600}
                height={600}
                alt={event.title}
              />

              <time className="font-bold mb-3 inline-block">{event.time}</time>
              <address className="mb-4 leading-6 not-italic">
                {event.address}
              </address>

              <Button asChild>
                <Link href={event.map} target="_blank">
                  Xem bản đồ
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

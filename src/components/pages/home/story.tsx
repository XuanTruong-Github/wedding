import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

export default function Story() {
  const stories = [
    {
      heading: "Bạn có tin vào tình yêu online không?",
      date: "October 03 2023",
      content: `<p>Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao
      có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại
      đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật
      đấy!!! Ngày ấy xung quanh tôi các chị em đều quen các bạn qua
      mạng. Do vì không tin về tình yêu online nên tôi nghĩ khó có thể
      quen ai qua mạng. Nhưng rồi thời gian cứ trôi, bạn bè dần dần có
      gia đình hết. Và rồi tôi cũng thử làm quen trên mạng xem sao.
      Sau vài cuộc tìm hiểu tôi đã gặp được anh bây giờ !!!</p>`,
      image:
        "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/f8e3bb158e9f4c00c3e8528400f3ee03.jpeg",
    },
    {
      heading: "Lời tỏ tình dễ thương^^",
      date: "June 28 2023",
      content: `<p>Ngày ấy, sau 1 buổi tối đẹp trời tôi và anh đi dạo. Khi kết thúc buổi hẹn cả 2 đều rung động và xao xuyến. Chúng tôi ai về nhà nấy. Nhưng cả 2 đều có những cảm xúc yêu thương.  Anh đã nhắn tin với tôi bằng 1 giọng văn đầy ngượng ngùng và yêu thương. ''Mình y em nhé".<br>
      Và cứ thế chúng tôi có những cái nắm tay đầu tiền, nụ hôn đầu tiên ...<br>
      Dù 1 thời gian ngắn gặp và quen anh nhưng chúng tôi đều có cảm giác mình là của nhau &lt;3</p>`,
      image:
        "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/f8e3bb158e9f4c00c3e8528400f3ee03.jpeg",
    },
    {
      heading: "Ngày lễ dạm ngõ",
      date: "June 28 2023",
      content: `<p>Và cuối cùng ngày đó cũng đến. Ngày 2 họ gặp nhau và chúng ta về chung 1 nhà. <br>
      Cảm ơn anh đã đồng hành cùng em trên chặng đường tiếp theo. Chúng mình sẽ cùng bước. Có thể nhanh, có thể chậm miễn là có bước đi cùng nhau. </p>`,
      image:
        "https://cdn.biihappy.com/ziiweb/website/653539aaab8486d0cc04a4db/f8e3bb158e9f4c00c3e8528400f3ee03.jpeg",
    },
  ];
  return (
    <section className="py-24 bg-gray-50 lg:py-32">
      <div className="container">
        <div className="text-center mb-9 md:w-3/4 mx-auto lg:mb-12">
          <Image
            src={"/images/flower.png"}
            alt="Couple"
            width={126}
            height={59}
            className="object-contain mb-2 mx-auto"
          />
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
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="mt-6 text-sm leading-7 md:text-base md:leading-9"
                  ></div>
                </div>
                <div
                  className={cn(
                    "relative aspect-square",
                    index === 1 ? "sm:mr-10" : "sm:ml-10"
                  )}
                >
                  <Image src={item.image} alt={item.heading} fill />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });
type Props = {
  images: { bride: string; groom: string };
};
export default function Couple({ images }: Props) {
  console.log("🚀 ~ file: couple.tsx:9 ~ Couple ~ images:", images);
  return (
    <section id="couple" className="py-20 container">
      <div className="text-center mx-auto md:w-3/4">
        <Image
          src="/images/flower.png"
          alt="Couple"
          width="126"
          height="59"
          className="object-contain mx-auto mb-2"
        />

        <h2
          className={cn(
            "text-3xl font-bold italic mb-2 md:mb-3",
            font.className
          )}
        >
          Cô dâu & Chú rể
        </h2>
        <p className="text-sm mb-9 leading-6 md:text-base md:leading-7">
          Bạn đồng hành là cùng nhau trưởng thành, cùng nhau thấu hiểu và bao
          dung. Chấp nhận nhau và cùng nhau sửa chữa những sai lầm.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 lg:mb-0 text-start">
        <div className="relative aspect-square">
          <Image
            src={images.groom}
            alt="Lê Xuân Trường"
            className="object-cover"
            fill
          />
        </div>
        <div className="bg-gray-50 py-10 px-8">
          <h2 className={cn("font-bold italic mb-3 text-2xl", font.className)}>
            Lê Xuân Trường
          </h2>
          <p className="mb-3">
            Con bà: <strong>Vương Thị Hương</strong>
          </p>
          <p className="leading-8">
            Là 1 chàng trai đến từ Lạng Sơn, hiện đang sinh sống và làm việc tại
            Hà Nội.
            <br />
            Là một người hiền lành thật thà. Luôn coi trọng tình cảm và yêu
            thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là
            bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn
            là nơi tràn ngập tình yêu thương để ta trở về.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-start">
        <div className="aspect-square lg:order-last">
          <div className="relative aspect-square">
            <Image
              src={images.bride}
              alt="Bùi Tú Anh"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="bg-gray-50 py-10 px-8 lg:order-first">
          <h2 className={cn("font-bold italic mb-3 text-2xl", font.className)}>
            Bùi Tú Anh
          </h2>
          <p className="mb-1">
            Con ông: <strong>Bùi Chí Thành</strong>
          </p>
          <p className="mb-3">
            Con bà: <strong>Đinh Thị Thúy Huệ</strong>
          </p>
          <p className="leading-8">
            Cô gái đến từ Tuyên Quang, hiện đang sinh sống và làm việc tại Hà
            Nội. Sau khi tốt nghiệp Đại học. Cô đã quyết tâm ở lại Hà Nội và gắn
            bó với ngành luật. Cô là một người vui vẻ, mạnh mẽ. Sống chân thành
            và tình cảm.
          </p>
        </div>
      </div>
    </section>
  );
}

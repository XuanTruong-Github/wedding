import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

export default function Donate() {
  const banks = [
    {
      title: "Mừng cưới đến chú rể",
      qrcode: "/images/groom-qrcode.png",
      bankName: "Ngân hàng Quân Đội - MBbank",
      accountName: "Lê Xuân Trường",
      accountNumber: "9704229208060184290",
    },
    {
      title: "Mừng cưới đến cô dâu",
      qrcode: "/images/groom-qrcode.png",
      bankName: "Ngân hàng Ngoại Thương - Vietcombank",
      accountName: "Bùi Tú Anh",
      accountNumber: "5446465465",
    },
  ];
  return (
    <section id="donate" className="bg-background py-20">
      <Image
        src={"/images/flower.png"}
        alt="Couple"
        width={126}
        height={59}
        className="object-contain aspect-square mx-auto"
      />
      <h2
        className={cn(
          "text-center text-2xl font-bold italic mb-10 md:text-3xl lg:text-4xl",
          font.className
        )}
      >
        Hộp mừng cưới
      </h2>
      <div className="px-4 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {banks.map((item, key) => (
          <article
            key={key}
            className="p-6 bg-white rounded-lg border-2 md:border-4 border-primary text-center shadow-lg"
          >
            <h4 className="font-bold text-lg mb-4">{item.title}</h4>
            <Image
              src={item.qrcode}
              alt="Couple"
              width={1080}
              height={1080}
              className="w-2/4 mx-auto mb-4"
            />
            <p>
              Ngân hàng: <strong>{item.bankName}</strong>
            </p>
            <p>
              Tên tài khoản: <strong>{item.accountName}</strong>
            </p>
            <p>
              Số tài khoản: <strong>{item.accountNumber}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

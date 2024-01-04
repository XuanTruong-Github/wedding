import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "@/styles/globals.css";

const font = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xuân Trường & Tú Anh",
  description:
    "Lê Xuân Trường & Bùi Tú Anh - Ngày cưới: 2024-01-14 |  Yêu còn hơn mê. Đó là nhu cầu được cảm thấy toàn bộ, cảm thấy an toàn, được chữa lành, kết hợp với một ai đó, trái tim và linh hồn",
  keywords: ["Lê Xuân Trường", "Bùi Tú Anh", "Xuân Trường", "Tú Anh"],
  openGraph: {
    title: "Xuân Trường & Tú Anh",
    url: "https://wedding-beryl-beta.vercel.app",
    description:
      "Lê Xuân Trường & Bùi Tú Anh - Ngày cưới: 2024-01-14 | Yêu còn hơn mê. Đó là nhu cầu được cảm thấy toàn bộ, cảm thấy an toàn, được chữa lành, kết hợp với một ai đó, trái tim và linh hồn",
    type: "website",
    images: [
      {
        url: "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/wedding/other/thank-you.jpg",
        width: 800,
        height: 800,
        alt: "Xuân Trường & Tú Anh",
      },
    ],
  },
  creator: "Xuân Trường",
  metadataBase: new URL("https://wedding-beryl-beta.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={font.className}>{children}</body>
    </html>
  );
}

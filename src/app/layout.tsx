import { Comfortaa } from "next/font/google";
import "@/styles/globals.css";

const font = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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

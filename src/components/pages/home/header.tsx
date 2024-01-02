import Logo, { LogoMini } from "@/components/logo";
import Sidebar from "./sidebar";
import { menu } from "@/configs/menu";
import Link from "next/link";
import { MenuType } from "@/types";

export default function Header() {
  return (
    <header className="w-full sticky bg-white top-0 left-0 z-40 shadow-xl">
      <section className="text-center py-4">
        <Logo className="mx-auto" />
        <div className="flex items-center justify-center mt-2 gap-2">
          <hr className="w-10" />
          <span className="text-xs text-gray-500">Just Married</span>
          <hr className="w-10" />
        </div>
      </section>
      <hr />
      <section className="flex items-center justify-between py-2 px-3 md:hidden">
        <LogoMini />
        <Sidebar />
      </section>
      <nav className="container items-center justify-center hidden md:flex">
        {menu.map((item: MenuType) => (
          <Link
            key={item.id}
            href={"#" + item.id}
            className="p-3 text-sm font-bold hover:text-primary lg:text-base lg:p-4"
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}

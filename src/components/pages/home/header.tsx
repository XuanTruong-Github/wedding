import Logo, { LogoMini } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
export default function Header() {
  return (
    <header className="w-full sticky bg-white top-0 left-0 z-40">
      <section className="text-center py-4">
        <Logo className="mx-auto" />
        <div className="flex items-center justify-center mt-2 gap-2">
          <hr className="w-10" />
          <span className="text-xs text-gray-500">Just Married</span>
          <hr className="w-10" />
        </div>
      </section>
      <hr />
      <section className="flex items-center justify-between py-2 px-3">
        <LogoMini />
        <Button variant="link" className=" p-0">
          <MenuIcon size={28} />
        </Button>
      </section>
    </header>
  );
}

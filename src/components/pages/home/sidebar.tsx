"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "@/components/logo";
import { Menu as MenuIcon } from "lucide-react";
import { menu as menuData } from "@/configs/menu";
import { useState } from "react";
import type { MenuType } from "@/types/index";
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sheet open={collapsed} onOpenChange={setCollapsed}>
      <SheetTrigger asChild>
        <Button variant="link" className="p-0 px-2">
          <MenuIcon size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white p-0">
        <SheetHeader className="p-4">
          <Logo />
        </SheetHeader>
        <nav className="font-bold">
          {menuData.map((item: MenuType) => (
            <Link
              key={item.id}
              href={item?.path || `#${item.id}`}
              className="inline-block w-full p-4"
              onClick={() => setCollapsed(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

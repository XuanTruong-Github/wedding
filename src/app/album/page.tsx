import Logo from "@/components/logo";
import { services } from "@/services";
import { Fragment } from "react";
import Image from "next/image";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Album() {
  const images = await services.getAlbum({ limit: 100 });

  return (
    <Fragment>
      <header>
        <section className="text-center container py-10">
          <Logo className="mx-auto mb-4" />
          <p className="text-foreground text-sm">
            Cầu mong cuộc hôn nhân này tràn ngập tiếng cười, mỗi ngày của chúng
            ta ở thiên đường.
          </p>
        </section>
      </header>
      <main>
        <section className="container columns-2 gap-2 md:columns-3 lg:columns-4">
          {images.map((item, key) => (
            <Dialog key={key}>
              <DialogTrigger>
                <div className="break-inside-avoid overflow-hidden cursor-pointer">
                  <Image src={item} alt={"" + key} height={600} width={800} />
                </div>
              </DialogTrigger>
              <DialogContent className="bg-white p-0 w-[90%] sm:w-fit">
                <Image
                  src={item}
                  alt="Ảnh cưới"
                  height={600}
                  width={800}
                  className="object-contain h-auto"
                  priority
                />
              </DialogContent>
            </Dialog>
          ))}
        </section>
        <section className="container md:text-center py-6">
          <Button asChild>
            <Link href={"/"}>
              <ArrowLeft className="mr-2" width={16} /> Quay lại
            </Link>
          </Button>
        </section>
      </main>
    </Fragment>
  );
}

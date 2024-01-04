import Header from "@/components/pages/home/header";
import Slider from "@/components/pages/home/slider";
import Invitation from "@/components/pages/home/invitation";
import Couple from "@/components/pages/home/couple";
import Story from "@/components/pages/home/story";
import Events from "@/components/pages/home/events";
import Album from "@/components/pages/home/album";
import Donate from "@/components/pages/home/donate";
import ThankYou from "@/components/pages/home/thankyou";
import Music from "@/components/pages/home/music";
import { services } from "@/services";
export default async function Home() {
  const images = await services.getImages();
  const albumImages = await services.getAlbum({ limit: 20 });
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Slider images={images.sliders} />
        <Invitation />
        <Couple images={images.couple} />
        <Story />
        <Events />
        <Album images={albumImages} />
        <Donate />
        <ThankYou image={images.thankYou} />
        <Music />
      </main>
    </div>
  );
}

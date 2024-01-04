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
  const sliderImages = await services.getSliders();
  const albumImages = await services.getAlbum({ limit: 20 });
  const coupleImages = await services.getCouple();
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Slider images={sliderImages} />
        <Invitation />
        <Couple images={coupleImages} />
        <Story />
        <Events />
        <Album images={albumImages} />
        <Donate />
        <ThankYou />
        <Music />
      </main>
    </div>
  );
}

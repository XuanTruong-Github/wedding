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
  const data = await services.getImages();
  const albumImages = await services.getAlbum({ limit: 20 });
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Slider images={data.sliders} />
        <Invitation />
        <Couple images={data.couple} />
        <Story stories={data.story} />
        <Events />
        <Album images={albumImages} />
        <Donate />
        <ThankYou image={data.thankYou} />
        <Music />
      </main>
    </div>
  );
}

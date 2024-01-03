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

export default async function Home() {
  const data = {
    sliders: [
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/slider-1.jpg",
      "https://osrokyoftlwfyhywgwui.supabase.co/storage/v1/object/public/Sliders/slider-2.jpg",
    ],
  };
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Slider images={data.sliders} />
        <Invitation />
        <Couple />
        <Story />
        <Events />
        <Album />
        <Donate />
        <ThankYou />
        <Music />
      </main>
    </div>
  );
}

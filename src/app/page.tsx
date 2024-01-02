import Header from "@/components/pages/home/header";
import Slider from "@/components/pages/home/slider";
import Invitation from "@/components/pages/home/invitation";
import Music from "@/components/pages/home/music";
export default function Home() {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <Slider />
        <Invitation />
        <Music />
      </main>
    </div>
  );
}

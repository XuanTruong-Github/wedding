"use client";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
export default function Music() {
  const [isPlaying, setPlay] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const onToogle = () => {
    if (musicRef.current?.paused) {
      musicRef.current?.play();
      setPlay(true);
    } else {
      musicRef.current?.pause();
      setPlay(false);
    }
  };
  const onEnded = () => {
    setPlay(false);
    musicRef.current?.load();
  };

  return (
    <>
      <audio
        ref={musicRef}
        src="/audio/music.mp3"
        controls
        className="hidden"
        onEnded={onEnded}
      ></audio>
      <Button
        className="rounded-full z-10 fixed left-4 bottom-[4%] h-[46px] px-3"
        onClick={onToogle}
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </Button>
    </>
  );
}

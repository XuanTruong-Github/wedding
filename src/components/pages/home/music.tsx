"use client";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
export default function Music() {
  const [isPlaying, setPlay] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const onToogle = () => {
    console.log(musicRef.current?.ended);
    if (musicRef.current?.paused && !musicRef.current?.ended) {
      musicRef.current?.play();
      setPlay(true);
    } else {
      musicRef.current?.pause();
      setPlay(false);
    }
  };

  return (
    <>
      <audio
        ref={musicRef}
        src="/audio/music.mp3"
        controls
        className="hidden"
      ></audio>
      <Button
        size="icon"
        className="rounded-full fixed left-4 bottom-[4%]"
        onClick={onToogle}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </Button>
    </>
  );
}

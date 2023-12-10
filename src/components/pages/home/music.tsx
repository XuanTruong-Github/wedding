"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
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
      <button
        className="fixed left-4 bottom-4 text-white bg-error rounded-full aspect-square px-3 border-4 border-red-200"
        onClick={onToogle}
      >
        <i
          className={cn(
            "text-xl mdi",
            isPlaying ? "mdi-volume-high" : "mdi-volume-off"
          )}
        ></i>
      </button>
    </>
  );
}

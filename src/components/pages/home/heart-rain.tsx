"use client";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
type IconType =
  | HTMLOrSVGImageElement
  | HTMLVideoElement
  | HTMLCanvasElement
  | ImageBitmap
  | OffscreenCanvas
  | VideoFrame;
export default function HeartRain() {
  const [icon, setIcon] = useState<IconType | null>(null);
  useEffect(() => {
    const heart = document.createElement("img");
    heart.src = "/images/heart.png";
    setIcon(heart);
  }, []);

  return !!icon ? (
    <Snowfall
      speed={[0, 1]}
      snowflakeCount={15}
      wind={[-1, 1]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      radius={[16, 16]}
      images={[icon]}
    />
  ) : (
    <></>
  );
}

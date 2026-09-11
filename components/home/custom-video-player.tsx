"use client";
import { images } from "@/assets/images";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { home_hero } = images;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-sm shadow-xl">
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/about-video.mp4"
        poster={home_hero.src}
        playsInline
        controls
        onEnded={() => setIsPlaying(false)}
        className="w-full h-auto aspect-video object-cover"
      />

      {/* Custom Styling & Play Button Overlay */}
      <div
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300 cursor-pointer ${
          isPlaying ? "opacity-0 hover:opacity-50" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default CustomVideoPlayer;

"use client";

import { useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <button
        onClick={toggleMusic}
        className="px-4 py-2 rounded-full shadow-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
      >
        {playing ? "⏸️ " : "▶️ "}
      </button>
    </div>
  );
}

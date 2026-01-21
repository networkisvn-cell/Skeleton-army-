import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio("/music/bg.mp3");
    audio.volume = 0.3;
    audio.loop = true;
    audio.play().catch(() => {});
  }, []);

  return null;
}

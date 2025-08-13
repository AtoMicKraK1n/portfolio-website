import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface MiniPlayerProps {
  cover: string;
  title: string;
  artist: string;
  src: string; // path to audio file
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({
  cover,
  title,
  artist,
  src,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center bg-primary text-primary-foreground rounded-lg shadow-md overflow-hidden transition-colors hover:bg-primary/90 w-56">
      {/* Cover Art */}
      <img src={cover} alt={title} className="w-10 h-10 object-cover" />

      {/* Song Info */}
      <div className="px-3 flex flex-col flex-grow overflow-hidden">
        <span className="text-sm font-semibold truncate">{title}</span>
        <span className="text-xs opacity-80 truncate">{artist}</span>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="px-3 py-2 hover:bg-primary/80 transition-colors"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default MiniPlayer;

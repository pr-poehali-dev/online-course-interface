import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Bookmark {
  time: number;
  title: string;
}

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [showBookmarkInput, setShowBookmarkInput] = useState(false);
  const [bookmarkTitle, setBookmarkTitle] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.volume = value[0];
      setVolume(value[0]);
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const addBookmark = () => {
    if (bookmarkTitle.trim() && videoRef.current) {
      setBookmarks([...bookmarks, {
        time: videoRef.current.currentTime,
        title: bookmarkTitle
      }]);
      setBookmarkTitle("");
      setShowBookmarkInput(false);
    }
  };

  const goToBookmark = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden border">
      <div className="relative bg-black aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full"
          src={videoUrl}
          onClick={togglePlay}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={togglePlay}>
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </Button>

          <div className="flex-1">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              className="cursor-pointer"
            />
          </div>

          <span className="text-sm text-muted-foreground min-w-[80px] text-right">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Icon name="Volume2" size={18} className="text-muted-foreground" />
              <Slider
                value={[volume]}
                max={1}
                step={0.1}
                onValueChange={handleVolumeChange}
                className="w-24"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Icon name="Gauge" size={18} className="mr-2" />
                  {playbackRate}x
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                  <DropdownMenuItem
                    key={rate}
                    onClick={() => handlePlaybackRateChange(rate)}
                  >
                    {rate}x
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBookmarkInput(!showBookmarkInput)}
            >
              <Icon name="Bookmark" size={18} className="mr-2" />
              Закладка
            </Button>
          </div>
        </div>

        {showBookmarkInput && (
          <div className="flex gap-2">
            <input
              type="text"
              value={bookmarkTitle}
              onChange={(e) => setBookmarkTitle(e.target.value)}
              placeholder="Название закладки"
              className="flex-1 px-3 py-2 border rounded-md text-sm"
              onKeyPress={(e) => e.key === "Enter" && addBookmark()}
            />
            <Button size="sm" onClick={addBookmark}>
              Добавить
            </Button>
          </div>
        )}

        {bookmarks.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold mb-2">Закладки:</h4>
            <div className="space-y-2">
              {bookmarks.map((bookmark, index) => (
                <button
                  key={index}
                  onClick={() => goToBookmark(bookmark.time)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary transition-colors flex items-center justify-between group"
                >
                  <span className="text-sm">{bookmark.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(bookmark.time)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

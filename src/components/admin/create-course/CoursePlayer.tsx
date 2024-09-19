import { FC, useEffect, useState } from "react";
import axios from "axios";

interface Props {
  title: string;
  demoUrl: string;
  demoVideoError?: string | null;
  demoVideoLoading?: boolean;
  setDemoVideoError: (demoVideoError: string | null) => void;
  setDemoVideoLoading: (demoVideoLoading: boolean) => void;
}

const CoursePlayer: FC<Props> = ({
  demoUrl,
  setDemoVideoError,
  setDemoVideoLoading,
}) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const getVideoSource = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "youtube";
    } else if (url.includes("vimeo.com")) {
      return "vimeo";
    } else {
      return "vdocipher";
    }
  };

  useEffect(() => {
    const videoSource = getVideoSource(demoUrl);

    if (videoSource === "vdocipher") {
      const fetchVideoData = async () => {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_SERVER}getVideoOPT`,
            {
              videoId: demoUrl,
            }
          );
          setVideoData(res.data);
        } catch (err) {
          if (setDemoVideoError) {
            setDemoVideoError("Failed to fetch video data");
            setError("Failed to fetch video data");
          }
        } finally {
          if (setDemoVideoLoading) {
            setLoading(false);
            setDemoVideoLoading(false);
          }
        }
      };

      fetchVideoData();
    } else {
      setLoading(false);
    }
  }, [demoUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const renderVideoPlayer = () => {
    const videoSource = getVideoSource(demoUrl);

    switch (videoSource) {
      case "youtube":
        return (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(demoUrl)}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case "vimeo":
        return (
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoVideoId(demoUrl)}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case "vdocipher":
        return (
          videoData.otp &&
          videoData.playbackInfo && (
            <div style={{ paddingTop: "41%", position: "relative" }}>
              <iframe
                src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=Qajgwa0o28tNXR7u`}
                style={{
                  border: 0,
                  maxWidth: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
                allowFullScreen
                allow="encrypted-media"
              ></iframe>
            </div>
          )
        );
      default:
        return <div>Unsupported video type</div>;
    }
  };

  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getVimeoVideoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:.*#|.*)?([0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return <div className="mx-auto mt-14">{renderVideoPlayer()}</div>;
};

export default CoursePlayer;

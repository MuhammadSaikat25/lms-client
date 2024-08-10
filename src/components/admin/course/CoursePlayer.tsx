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

  useEffect(() => {
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
  }, [demoUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" mx-auto mt-14">
      {videoData.otp && videoData.playbackInfo && (
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
      )}
    </div>
  );
};

export default CoursePlayer;
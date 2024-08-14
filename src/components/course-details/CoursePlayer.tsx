import { useGetSingleCourseQuery } from "../../redux/feature/course/courseApi";

type Props = {
  id: string;
};

const VideoEmbed = ({ id }: Props) => {
  const { data } = useGetSingleCourseQuery(id);
  const videoUrl = id && data?.data.demoUrl;

  if (!videoUrl) {
    return <p>Video URL not available</p>;
  }

  const youtubeEmbedUrl =
    videoUrl
      .replace("https://youtu.be/", "https://www.youtube.com/embed/")
      .split("?")[0] + "?rel=0";

  return (
    <div className="video-container rounded" >
      {youtubeEmbedUrl ? (
        <iframe
          width="100%"
          height="315"
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>
      ) : (
        <h1 className="text-center text-white">video not found</h1>
      )}
    </div>
  );
};

export default VideoEmbed;

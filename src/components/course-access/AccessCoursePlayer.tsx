type Props={
    videoUrl:string
}
const AccessCoursePlayer = ({videoUrl}:Props) => {
    const youtubeEmbedUrl =
    videoUrl
      .replace("https://youtu.be/", "https://www.youtube.com/embed/")
      .split("?")[0] + "?rel=0";
  return (
    <div className="video-container rounded">
      <iframe
        width="100%"
        height="415"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default AccessCoursePlayer;

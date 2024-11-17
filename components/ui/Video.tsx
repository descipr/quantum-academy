interface VideoPropsProps {
  VideoUrl: string;
}
const Video = ({VideoUrl} : VideoPropsProps) => {
  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={VideoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-player-container">
      <ReactPlayer url={url} controls={true} />
    </div>
  );
};

export default VideoPlayer;

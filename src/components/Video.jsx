import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Video = () => {
  const { id } = useParams();
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="80vh"
        controls
      />
    </div>
  );
};

export default Video;

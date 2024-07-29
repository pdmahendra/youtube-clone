import { useNavigate } from "react-router-dom";
import { videos } from "./VideoGrid";

const VideoList = () => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`);
  };
  return (
    <div>
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-[#0f0f0f]"
          onClick={() => handleVideoClick(video.id)}
        >
          <Video
            id={video.id}
            title={video.title}
            thumbImage={video.thumbImage}
            avatar={video.avatar}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

const Video = (props: any) => {
  return (
    <div className="grid grid-cols-9 sm:grid-cols-5 ">
      <div className="col-span-3 sm:col-span-1  lg:col-span-2 p-1 sm:p-1.2">
        <img src={props.thumbImage} className="rounded-xl w-44"></img>
      </div>
      <div className="col-span-6 sm:col-span-3 text-sm lg:col-span-3 max-w-[230px]">
        <div className="text-white text-sm sm:text-base font-semibold">
          {props.title}
        </div>
        <div className="text-gray-400 text-xs sm:text-xs py-1">
          {props.author}
        </div>
        <div className="text-gray-400 text-xs sm:text-xs">
          {props.views} <span>.</span> {props.timestamp}
        </div>
      </div>
    </div>
  );
};

export default VideoList;

import { useLocation } from "react-router-dom";
import Video from "../components/Video";
import VideoList from "../components/VideoList";
import { useEffect, useState } from "react";
import { CardType, videos } from "../components/VideoGrid";

const WatchPage = () => {
  const location = useLocation();
  const [video, setVideo] = useState<CardType | undefined>(undefined);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get("v");

    if (videoId) {
      const foundVideo = videos.find((video) => video.id === videoId);
      if(!foundVideo) {
        console.log("video not found");
        
      }
      setVideo(foundVideo);
    }
  }, [location.search]);

  if (!video) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row cursor-pointer wrap mt-6 xl:ml-14 xl:mr-14 xl:pl-10 xl:pr-10">
      <div className="lg:m-4 lg:w-2/3  min-w-[356px]">
        <Video
          thumbImage={video.thumbImage}
          title={video.title}
          author={video.author}
          views={video.views}
          avatar={video.avatar}
        />
      </div>

      <div className="lg:w-1/3 mt-4  min-w-[356px]">
        <VideoList />
      </div>
    </div>
  );
};

export default WatchPage;

import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
export interface CardType {
  id:string;
  title: string;
  thumbImage: string;
  avatar: string;
  author: string;
  views: string;
  timestamp: string;
}
export const videos = [
  {
    id: "1",
    title: "Agar Tum Sath Ho | Arijit Singh",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "88M views",
    timestamp: "8y ago",
  },
  {
    id: "2",
    title: "Bapuji and jetha special | TMKOC",
    thumbImage:
      "https://i.ytimg.com/vi/9SRBX_MlqJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXDJgeUzMLv4lx88csXOixh6ZXPw",
    avatar:
      "https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s68-c-k-c0x00ffffff-no-rj",
    author: "Sony Sab",
    views: "671k views",
    timestamp: "2y ago",
  },
  {
    id: "3",
    title: "Phir wahi | Jagga Jasoos",
    thumbImage:
      "data:image/jpeg;base64,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",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "8M views",
    timestamp: "7y ago",
  },
  {
    id: "4",
    title: "Sajni Re | Laapta Ladies",
    thumbImage:
      "https://i.ytimg.com/vi/k3g_WjLCsXM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpsK0Z6HGLgSYCyKLgQ5c7d1BHEg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "108M views",
    timestamp: "1 month ago",
  },
  {
    id: "5",
    title: "yahin Hoon Main Full Video Song",
    thumbImage:
      "https://i.ytimg.com/vi/DkhZ3H5IelU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxx4it3TervBZ416EXo1mK_c2AXw",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "8M views",
    timestamp: "9y ago",
  },
  {
    id: "6",
    title: "Pehla Pyar | Kabir Singh",
    thumbImage:
      "https://i.ytimg.com/vi/B7SkAq_94J8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxh7z0XmpquA9WXTZ4006L5bramA",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "66M views",
    timestamp: "7y ago",
  },
  {
    id: "7",
    title: "Tum Se Hi | Jab We Met",
    thumbImage:
      "https://i.ytimg.com/vi/Cb6wuzOurPc/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuo6ZfN0G-fOnVMWmdZdu-4DP1_Q",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "8M views",
    timestamp: "1 month ago",
  },
  {
    id: "8",
    title: "Jumritalaiyya | Jagga Jasoos",
    thumbImage:
      "https://i.ytimg.com/vi/ark-QGPqs6Y/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC9_zYjc9TO2dzv2QGlCvq16dFFFQ",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "8M views",
    timestamp: "1 month ago",
  },
  {
    id: "9",
    title: "Taarak Mehta Ka Ooltah Chashma - Episode 413",
    thumbImage:
      "https://i.ytimg.com/vi/51SwozTN9qM/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARhyIFcoQTAP&rs=AOn4CLC8pSiGrYwrmMhluGj6clo7qTbO-Q",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Sony Sab",
    views: "34M views",
    timestamp: "10y ago",
  },
  {
    id: "10",
    title: "Taarak Mehta Ka Ooltah Chashma - Episode 942",
    thumbImage:
      "https://i.ytimg.com/vi/d2fTjMt_l1M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJebvIX-UGL1jH5lX4kt03ruxzlA",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M views",
    timestamp: "10y ago",
  },
  {
    id: "11",
    title: "Atrangi Re: Rait Zara Si Full Video",
    thumbImage:
      "https://i.ytimg.com/vi/aOliIfyH6vI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFfwAIiz-BoRNpO7Ur7oFu1G0WDA",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "T-Series",
    views: "134M views",
    timestamp: "2y ago",
  },
  {
    id: "12",
    title:
      "Hosanna Best Video | Ekk Deewana Tha | Amy Jackson | prateik Babbar",
    thumbImage:
      "https://i.ytimg.com/vi/hoHo8h2JOgY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTrGBOgzpzUJPP5kIYIme9ox0h5g",
    avatar:
      "https://yt3.ggpht.com/Q3Hm_Y4J05A-VATeZ1QF89FnL0Zhq748MMXGXkZvAaqrceMTeq_cjEZI0M0E8kIZKrZ_NoJaMw=s68-c-k-c0x00ffffff-no-rj",
    author: "Sony Music India",
    views: "45M views",
    timestamp: "2y ago",
  },
  {
    id: "13",
    title: "How to learn talking in 30 days",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M",
    timestamp: "1 month ago",
  },
  {
    id: "14",
    title: "How to learn talking in 30 days",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M",
    timestamp: "1 month ago",
  },
  {
    id: "15",
    title: "How to learn talking in 30 days",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M",
    timestamp: "1 month ago",
  },
  {
    id: "16",
    title: "How to learn talking in 30 days",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M",
    timestamp: "1 month ago",
  },
  {
    id: "17",
    title: "How to learn talking in 30 days",
    thumbImage: "https://i.ytimg.com/vi/sK7riqg2mr4/maxresdefault.jpg",
    avatar:
      "https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj",
    author: "Pratik Mahendra",
    views: "8M",
    timestamp: "1 month ago",
  },
];

const VideoGrid = () => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId: any) => {
    navigate(`/watch?v=${videoId}`);
  };
  return (
    <div className="grid grid-cols-3 gap-5 bg-black p-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex justify-center py-6"
          onClick={() => handleVideoClick(video.id)}
        >
          <VideoCard
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

export default VideoGrid;

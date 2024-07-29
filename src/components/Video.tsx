// import Details from "./Details";

interface VideoProps {
  thumbImage: string;
  title: string;
  author: string;
  views: string;
  avatar: string;
}

const Video = ({
  thumbImage,
  title,
  author,
  views,
  avatar,
}: VideoProps) => {
  return (
    <div className="max-w-2xl sm:max-w-6xl ml-2 mr-2 text-white">
      <div className="">
        <img src={thumbImage} className="rounded-lg w-full" />
      </div>
      <div className="">
        <h1 className="text-sm font-bold sm:text-lg lg:text-xl">{title} </h1>
        <div>
          {/* <Details/> */}
          <div>{author}</div>
          <div><img src={avatar} alt="" /></div>
          <div>{views}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;

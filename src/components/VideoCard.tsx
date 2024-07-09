
const VideoCard = (props: any) => {
  return (
    <div className="cursor-pointer">
      <img src={props.thumbImage} className="rounded-xl w-full"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 bg-black">
          <img src={props.avatar} className="rounded-full w-14 h-8"/>
        </div>
        <div className="col-span-11 pl-2 bg-black">
          <div className="text-white font-semibold text-base">{props.title}</div>
          <div className="text-gray-400 text-sm">{props.author}</div>
          <div className="text-gray-400 text-sm">
            {props.views} . {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;



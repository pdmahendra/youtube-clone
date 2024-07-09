import Search from "./Search";

const AppBar = () => {
  return (
    <div className="flex justify-between bg-black text-white pt-1.5 ">
      <div className="text-xl font-bold tracking-tighter flex items-center pl-6">
        <div className="pr-5 pt-1 pl-0.6"><img src="https://cdn-icons-png.flaticon.com/128/7711/7711100.png" className="h-3.5 w-5"/></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
            className="h-10 w-auto pt-1"
          />
        YouTube
      </div>
      <div className="">
        <Search />
      </div>
      <div className="pt-2 mr-14 sm:mr-6">sign In</div>
    </div>
  );
};

export default AppBar;

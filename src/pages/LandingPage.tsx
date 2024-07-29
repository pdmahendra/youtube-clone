import SideBar from "../components/sidebar/SideBar"
import VideoGrid from "../components/VideoGrid";


const LandingPage = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-5">
          <VideoGrid />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import Header from "../components/header";
import First from "../components/front";
import Hovercontext from "../components/hovercontext";
import Slider from "../components/slider";
function Home() {
  return (
    <div>
      <div className="bg-[#FBFBFE]">
        <Header />
      </div>
      <First />
      <Hovercontext />
      <Slider />
    </div>
  );
}
export default Home;

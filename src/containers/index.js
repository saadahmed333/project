import Header from "../components/header";
import First from "../components/front";
import Hovercontext from "../components/hovercontext";
import Slider from "../components/slider";
import Idea from "../components/idea";
import SimpleSlider from "../components/slider2";
function Home() {
  return (
    <div>
      <div className="bg-[#FBFBFE]">
        <Header />
      </div>
      <First />
      <Hovercontext />
      <Slider />
      <Idea />
      <SimpleSlider />
    </div>
  );
}
export default Home;

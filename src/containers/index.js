import Header from "../components/header";
import First from "../components/front";
import Hovercontext from "../components/hovercontext";
import Sliders from "../components/slider";
import Idea from "../components/idea";
import SimpleSlider from "../components/slider2";
import Clients from "../components/clients";
import sideImage from "../assets/sideimage.png";
import Footer from "../components/footer";
function Home() {
  return (
    <div>
      <div className="bg-[#FBFBFE]">
        <Header />
      </div>
      <First />
      <Hovercontext />
      <Sliders />
      <Idea />
      <SimpleSlider />
      <div>
        <img src={sideImage} alt="" />
      </div>
      <Clients />
      <Footer />
    </div>
  );
}
export default Home;

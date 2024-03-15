import { Helmet } from "react-helmet";
import MainSwiper from "../MainSwiper/MainSwiper";
import MainCarousel from "../MainCarousel/MainCarousel";
import SomePieceContent from "../SomePieceContent/SomePieceContent";
import Blog from "../Blog/Blog";
import BusinessCarousel from "../BusinessCarousel/BusinessCarousel";
import BusinessText from "../BusinessCarousel/BusinessText";
import ExcitingFeature from "../ExcitingFeature/ExcitingFeature";
import Conversion from "../Conversion/Conversion";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Revenue</title>
      </Helmet>
      <SomePieceContent />
      <div className="container mt-[120px]">
        <MainCarousel />
        <MainSwiper />
      </div>
      <Blog />
      <div className="mt-[150px]">
        <BusinessText />
        <BusinessCarousel />
      </div>
      <ExcitingFeature />
      <Conversion/>
    </div>
  );
};

export default Home;

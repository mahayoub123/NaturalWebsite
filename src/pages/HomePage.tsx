import BookBike from "../components/BookBike/BookBike";
import Card from "../components/Card/Card";
import Explore from "../components/Explore/Explore";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import SecondStatic from "../components/SecondStatic/SecondStatic";
import Static from "../components/Static/Static";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Explore />
      <Static />
      <SecondStatic />
      <Card />
      <BookBike />
      <Footer />
    </div>
  );
};

export default HomePage;

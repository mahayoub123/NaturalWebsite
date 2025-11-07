import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import NavBar from "../components/NavBar/NavBar";
import StaticAbout from "../components/StaticAbout/StaticAbout";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <StaticAbout />
      <Footer />
    </div>
  );
};

export default AboutPage;

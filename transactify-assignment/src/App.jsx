import "./App.css";
import FeaturedProjects from "./components/featuredprojects/FeaturedProjects";
import HeroSection from "./components/herosection/HeroSection";
import ServicesOffered from "./components/projectsType/ServicesOffered";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";
import NewsSection from "./components/newsSection/NewsSection";
import AfricaMessage from "./components/africaMessage/AfricaMessage";
function App() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <ServicesOffered />
      <FeaturedProjects />
      <AfricaMessage />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;

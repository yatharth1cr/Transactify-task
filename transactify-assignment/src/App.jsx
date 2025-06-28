import "./App.css";
import FeaturedProjects from "./components/featuredprojects/FeaturedProjects";
import HeroSection from "./components/herosection/HeroSection";
import ServicesOffered from "./components/projectsType/ServicesOffered";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/footer/Footer";
import NewsSection from "./components/newsSection/NewsSection";
import AfricaMessage from "./components/africaMessage/AfricaMessage";
import Partners from "./components/partners/Partners";
function App() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <ServicesOffered />
      <FeaturedProjects />
      <AfricaMessage />
      <Partners />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;

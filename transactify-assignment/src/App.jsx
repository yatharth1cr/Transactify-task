import "./App.css";
import FeaturedProjects from "./components/featuredprojects/FeaturedProjects";
import HeroSection from "./components/herosection/HeroSection";
import ServicesOffered from "./components/projectsType/ServicesOffered";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <ServicesOffered />
      <FeaturedProjects />
    </>
  );
}

export default App;

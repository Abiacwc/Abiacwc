import HeroSection from "./components/herosection";
import AboutSection from "./components/about";
import Wholecenter from "./components/wholecenter";
import Newsletter from "./components/newsteller";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import Video from "./components/video";
import "./globals.css"

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <Wholecenter />
        <Newsletter />
        <Contact />
        <Footer />
        {/* <Video /> */}
    </>
  );
}


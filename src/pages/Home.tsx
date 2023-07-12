import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/sections/About";
import Faq from "../components/home/sections/Faq";
import Footer from "../components/home/sections/Footer";
import News from "../components/home/sections/News";
import Services from "../components/home/sections/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Faq />
      <News />
      <Footer />
    </>
  );
};

export default Home;

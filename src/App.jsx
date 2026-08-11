import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import About from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

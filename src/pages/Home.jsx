import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechBanner from "../components/TechBanner";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";

// Home page composes every portfolio section in order.
export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TechBanner />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

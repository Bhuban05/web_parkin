import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AppPromo from "./components/sections/AppPromo";
import Stats from "./components/sections/Stats";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import SpaceOwners from "./components/sections/SpaceOwners";
import FloatingButton from "./components/ui/FloatingButton";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main id="main-content">
        <Hero />
        <AppPromo />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <SpaceOwners />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

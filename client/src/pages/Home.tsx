import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import LuxuryStay from '../components/sections/LuxuryStay';
import ContinentalCafe from '../components/sections/ContinentalCafe';
import Experiences from '../components/sections/Experiences';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Booking from '../components/sections/Booking';
import Contact from '../components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger after component mounts
    ScrollTrigger.refresh();
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <LuxuryStay />
      <ContinentalCafe />
      <Experiences />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
  );
}

"use client";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import AwardsBand from "@/components/AwardsBand";
import Portfolio from "@/components/Portfolio";
import ParallaxBreak from "@/components/ParallaxBreak";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <Services />
      <AwardsBand />
      <Portfolio />
      <ParallaxBreak />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

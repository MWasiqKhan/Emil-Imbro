import { IconSprite } from "@/components/Icons";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BookIntro from "@/components/BookIntro";
import Journey from "@/components/Journey";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Places from "@/components/Places";
import Buy from "@/components/Buy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <IconSprite />
      <Preloader />
      <Nav />
      <Hero />
      <Marquee />
      <BookIntro />
      <Journey />
      <Quote />
      <About />
      <Places />
      <Buy />
      <Contact />
      <Footer />
      <BackToTop />
      <RevealObserver />
    </>
  );
}

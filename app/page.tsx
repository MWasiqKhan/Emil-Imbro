import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BookIntro from "@/components/BookIntro";
import Trailers from "@/components/Trailers";
import Journey from "@/components/Journey";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Places from "@/components/Places";
import Buy from "@/components/Buy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Marquee />
      <BookIntro />
      <Trailers />
      <Journey />
      <Quote />
      <About />
      <Places />
      <Buy />
      <Contact />
    </>
  );
}

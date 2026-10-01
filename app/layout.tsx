import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IconSprite } from "@/components/Icons";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: {
    default: "Emil Imbro | Author of Fate Gave Me Two Lives",
    template: "%s | Emil Imbro",
  },
  description: "Official website of Emil Imbro, author of the memoir Fate Gave Me Two Lives.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        <Nav />
        {children}
        <Footer />
        <BackToTop />
        <RevealObserver />
      </body>
    </html>
  );
}

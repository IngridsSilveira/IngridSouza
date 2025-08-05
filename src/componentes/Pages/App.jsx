import {
  LanguageProvider,
  Header,
  BackgroundImage,
  AboutMe,
  Skills,
  Projects,
  Footer,
  ScrollToTop,
} from "../index";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  
  return (
    <LanguageProvider>
      <Header />
      <BackgroundImage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
      <ScrollToTop />
    </LanguageProvider>
  );
}

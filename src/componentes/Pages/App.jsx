import {LanguageProvider, Header, BackgroundImage, Skills, Projects, Footer, ScrollToTop } from "../index";

export default function App() {
  return (
      <LanguageProvider>
        <Header />
        <BackgroundImage />
        <Skills />
        <Projects />
        <Footer />
        <ScrollToTop/>
      </LanguageProvider>
  );
}

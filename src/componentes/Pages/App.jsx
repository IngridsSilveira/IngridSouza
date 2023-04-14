import Header from '../Header'
import Preloader from '../Preloader';
import SectionSkills from '../Body/Skills'
import Projects from '../Body/Projects';
import Contacts from '../Body/Contacts';
import Footer from '../Footer';

export default function App() {
  return (
    <>
    
      <Header />
      <Preloader />
      <SectionSkills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
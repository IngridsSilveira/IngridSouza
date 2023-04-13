import Header from '../Header'
import SectionSkills from '../Body/Skills'
import Projects from '../Body/Projects';
import Contacts from '../Body/Contacts';
import Footer from '../Footer';

export default function App() {
  return (
    <>
    {/* <div id="preloader">
        <h1>Loading</h1>
        <p class="c-loader"></p>
        <p class="c-loader"></p>
        <p class="c-loader"></p>
        <p class="c-loader"></p>
        <p class="c-loader"></p>
    </div> */}
      <Header />
      <SectionSkills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
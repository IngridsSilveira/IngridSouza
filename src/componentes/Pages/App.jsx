import Header from '../Header'
import SectionSkills from '../Body/Skills'
import Projects from '../Body/Projects';
import Contacs from '../Body/Contacts';

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
      <Contacs />
    </>
  );
}
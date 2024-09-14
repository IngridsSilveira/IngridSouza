import "./styles.scss";
import Loading from "../../../js/main.js";

export default function Skills() {
  return (
    <>
    <section id="Home" className="background bg-image-black container-fluid hidden" onLoad={Loading}>
         <div className="background_titles hidden">
            <h1 className="name" id="name">Ingrid S. Silveira</h1>
            <h2 className="profission" id="profission">Web Developer</h2>
        </div>

        <div className="about hidden">
            <p className="description" id="aboutMe">Specialized in creating modern and responsive digital experiences, with a focus on performance and usability.</p>

            <div className="div_icons_social">
                <a className="animation" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ingridssilveira/" aria-label="linkedin page"><i
                        className="icons_first bi bi-linkedin"></i></a>

                <a className="animation" target="_blank" rel="noreferrer" href="https://www.instagram.com/dev_ingrid/" aria-label="instagram page"><i
                        className="icons_first bi bi-instagram"></i></a>

                <a className="animation" target="_blank" rel="noreferrer" href="https://github.com/IngridsSilveira" aria-label="github page"><i
                        className="icons_first bi bi-github"></i></a>

                <a className="animation" href="https://api.whatsapp.com/send?phone=5521979661084" target="_blank" rel="noreferrer" aria-label="whatsapp page">
                    <i className="icons_first bi bi-whatsapp"></i>
                </a>
            </div>
        </div>
    </section>

    <section className="skills hidden">
     <div className="widget_title hidden">
            <h3 className="skills_title">Skills</h3>
            <div className="widget_title_bar"></div>
        </div>

        <div className="skills_square">
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-html5" style={{color: "#ff651e"}}></i>
                    <p>HTML</p>
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-css3-alt" style={{color: "#0062f2"}}></i>
                 <p>CSS</p>
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-sass" style={{color: "#cf649a"}}></i>
                    <p>SASS</p>
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-square-js" style={{color: "#ffdf00"}}></i>
                    <p>Javascript</p>
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-react" style={{color: "#106fff"}}></i>
                    <p>ReactJs</p>
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-bootstrap" style={{color: "#8511FA"}}></i>
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>

    </section>
    
    </>
  );
}
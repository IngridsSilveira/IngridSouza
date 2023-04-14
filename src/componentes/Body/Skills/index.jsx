import "./styles.scss";
import Loading from "../../../js/main.js";

export default function Skills() {
  return (
    <>
    <section id="Home" className="background bg-image-black container-fluid hidden" onLoad={Loading}>
         <div className="background_titles hidden">
            <h1 className="name" id="name">Ingrid de Souza</h1>
            <h2 className="profission" id="profission">Web Developer</h2>
        </div>

        <div className="about hidden">
            <p className="description" id="aboutMe">I'm a 22-year-old web developer from Brasil, involved in web development since 2021.</p>
            <p className="info" id="info"><a className="info" href="#contact">For more information contact me!!</a>
            </p>

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
                <a className="btn_cv animation"
                    href="https://drive.google.com/file/d/1mUBqfvxftXu7Tvl4ElfgZVnRj0WmjNhe/view?usp=share_link"
                    target="_blank" rel="noreferrer"
                    aria-label="curriculum page">
                    CV
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
                    
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-css3-alt" style={{color: "#0062f2"}}></i>
                 
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-sass" style={{color: "#cf649a"}}></i>
                   
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-square-js" style={{color: "#ffdf00"}}></i>
                   
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-react" style={{color: "#106fff"}}></i>
                   
                </div>
            </div>
            <div className="square">
                <div className="square_alinhado">
                    <i className="icons_skills fa-brands fa-bootstrap" style={{color: "#8511FA"}}></i>
                    
                </div>
            </div>
        </div>

    </section>
    
    </>
  );
}
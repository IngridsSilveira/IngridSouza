import "./styles.scss";

export default function Contacs() {
  return (
    <>
      <section id="Contacts" className="formulario">
            <div className="widget_title hidden">
                <h2 className="titulo_skills titulos">Contact</h2>
            <div className="widget_title_bar"></div>
            </div>
            <p className="descricao hidden" id="wantContact">Want to contact me?</p>
            <p className="descricao_form hidden" id="preenchaContact">Fill out the form and I will contact you as soon as
                possible.</p>
            <form id="form" action="https://api.staticforms.xyz/submit" method="POST" className="form hidden">
                <input type="hidden" name="accessKey" value="276987cd-09d2-478e-b968-0b76c74b811c"/>
                <input type="hidden" name="redirectTo" value="https://ingridssilveira.github.io/IngridSouza/"/>
                <fieldset>
                    <div className="input-container">
                        <input name="name" id="nome" className="input form-control" type="text" placeholder="Name:"
                            data-tipo="nome" minlength="6" required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <input name="email" id="email" className="input form-control" type="email" placeholder="E-mail:"
                            data-tipo="email" required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <textarea name="message" id="mensagem" className="input mensagem form-control" cols="30" rows="10"
                            placeholder="Message:" data-tipo="mensagem" minlength="50" required></textarea>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <input id="submit" type="submit" className="btn btn-success btn_contato" value="Send"/>
                </fieldset>
            </form>
      </section>
    </>
  );
}

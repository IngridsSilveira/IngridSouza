import "./styles.scss";

export default function Contacs() {
  return (
    <>
      <section id="Contact" className="fSection hidden">
            <div className="widget_title hidden">
                <h3 className="title_Contact ">Contact</h3>
            <div className="widget_title_bar"></div>
            </div>
            <p className="description hidden" id="wantContact">Want to contact me?</p>
            <p className="form_description hidden" id="preenchaContact">Fill out the form and I will contact you as soon as
                possible.</p>
            <form id="form" action="https://wa.me/5521979661084?text=Tenho%20interesse%20em%seus%20sites" className="form hidden">
                <fieldset>
                    <div className="input-container">
                        <input name="name" id="nome" className="input form-control" type="text" placeholder="Name:"
                            data-tipo="nome" minLength="6" required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <input name="email" id="email" className="input form-control" type="email" placeholder="E-mail:"
                            data-tipo="email" required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <textarea name="message" id="mensagem" className="input mensagem form-control" cols="30" rows="10"
                            placeholder="Message:" data-tipo="mensagem" minLength="50" required></textarea>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <input id="submit" type="submit" className="btn btn-success btn_contact" value="Send"/>
                </fieldset>
            </form>
      </section>
    </>
  );
}

import {useState} from 'react' 
import emailjs from '@emailjs/browser'
import "./styles.scss";


export default function Contacs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const sendEmail = (evt) => {
        evt.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send('service_0zhsa8g', 'template_q5qojeb', templateParams, 'YJeBNk_Ug7kAKFDLz')
        .then((res)=> {
            alert("E-MAIL ENVIADO COM SUCESSO");
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log('Error', err);
        })
    }

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

            <form id="form" className="form hidden" onSubmit={sendEmail}>
                <fieldset>
                    <div className="input-container">
                        <input name="name" id="nome" className="input form-control" type="text" placeholder="Name:"
                            data-tipo="nome" minLength="6" onChange={(e)=>setName(e.target.value)} value={name} required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <input name="email" id="email" className="input form-control" type="email" placeholder="E-mail:"
                            data-tipo="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <div className="input-container">
                        <textarea name="message" id="mensagem" className="form-control mb-3" rows="3"
                            placeholder="Message:" data-tipo="mensagem" minLength="50" onChange={(e)=>setMessage(e.target.value)} value={message} required></textarea>
                        <span className="input-mensagem-erro"></span>
                    </div>
                    <input id="submit" type="submit" className="btn btn-success btn_contact" value="Send" target='_blank'/>
                </fieldset>

            </form>
      </section>
    </>
  );
}

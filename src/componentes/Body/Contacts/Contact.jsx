import { useState } from "react";
import { useLanguage } from "../../index";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const { language, texts } = useLanguage();

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 6) {
      formErrors.name = "O nome precisa ter no mínimo 6 caracteres.";
    }
    if (!emailRegex.test(email)) {
      formErrors.email = "Formato de e-mail inválido.";
    }
    if (message.length < 50) {
      formErrors.message = "A mensagem precisa ter no mínimo 50 caracteres.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (evt) => {
    evt.preventDefault();
    if (!validateForm()) return;

    const templateParams = { from_name: name, message, email };

    emailjs
      .send(
        "service_273rzl4",
        "template_q5qojeb",
        templateParams,
        "YJeBNk_Ug7kAKFDLz"
      )
      .then(
        (res) => {
          alert("E-MAIL ENVIADO COM SUCESSO");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        },
        (err) => {
          console.log("Error", err);
          alert("Houve um erro ao enviar o e-mail. Tente novamente.");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="bg-slate-200 p-6 rounded-lg shadow-md shadow-slate-700"
      aria-labelledby="contact-heading"
    >
      <p className="text-lg md:text-xl text-center font-rubik mb-4 text-black"
      id="contact-heading">
        {texts[language].contact}
      </p>

      <form onSubmit={sendEmail}>
        <fieldset className="flex flex-col gap-4 ">
          {/* Campo Nome */}
          <div>
            <label className="text-sm text-black font-bold" htmlFor="name">
              Nome:
            </label>
            <input
              name="name"
              className={`p-2 w-full border ${
                errors.name ? "border-red-600" : "border-gray-400"
              } rounded-md text-black placeholder-gray-500`}
              type="text"
              placeholder="Seu nome"
              minLength="6"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Campo E-mail */}
          <div>
            <label className="text-sm text-black font-bold" htmlFor="email">
              E-mail:
            </label>
            <input
              name="email"
              className={`p-2 w-full border ${
                errors.email ? "border-red-600" : "border-gray-400"
              } rounded-md text-black placeholder-gray-500`}
              type="email"
              placeholder="Seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Campo Mensagem */}
          <div>
            <label className="text-sm text-black font-bold" htmlFor="message">
              Mensagem:
            </label>
            <textarea
              name="message"
              className={`p-2 w-full border ${
                errors.message ? "border-red-600" : "border-gray-400"
              } rounded-md text-black placeholder-gray-500`}
              rows="4"
              placeholder="Sua mensagem"
              minLength="50"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="rounded-md py-1 w-full flex items-center justify-center text-4xl transition-all hover:bg-blue-400"
            aria-label="Enviar mensagem"
          >
            <RiSendPlaneFill className="text-blue-600" />
          </button>
        </fieldset>
      </form>
    </section>
  );
};

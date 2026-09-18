import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_w51migs",
        "template_4g0jgsn",
        formRef.current,
        "2ZWYQ_8yZEENtPra1"
      )
      .then(() => {
        Swal.fire({
          title: "Mensaje enviado",
          text: "Tu mensaje ha sido enviado correctamente.",
          icon: "success",
          confirmButtonColor: "#00860b",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
          icon: "error",
          confirmButtonColor: "#7f0000",
        });
      });
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          Si quieres ponerte en contacto conmigo, aquí tienes varias formas de hacerlo.
          Estoy disponible para nuevas oportunidades, colaboraciones y proyectos.
        </p>

        <div className="contact-content">

          <div className="contact-info">
            <h3 className="contact-section-title">Información de contacto</h3>

            <div className="contact-item">
              <span className="contact-label">Teléfono:</span>
              <p className="contact-value">691 752 094</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <p className="contact-value">dgm1021999@gmail.com</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">Ubicación:</span>
              <p className="contact-value">Carmona, Sevilla — España</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/daniel-gutiérrez-moreno-960a33175/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Perfil de LinkedIn
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub:</span>
              <a
                href="https://github.com/daniguti99"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="contact-section-title">Envíame un mensaje</h3>

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Tu email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  required
                ></textarea>
              </div>
              <div className="contact-submit">
                <button type="submit" className="contact-btn">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

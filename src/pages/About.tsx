import "../styles/about.css";
import foto3 from "../assets/dani.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">

      {/* ===== Bloque superior: foto + presentación ===== */}
      <div className="about-container">
        <div className="about-left">
          <img src={foto3} alt="Daniel Gutiérrez" className="about-img" />
        </div>

        <div className="about-right">
          <h2 className="about-title">Sobre mí</h2>

          <p className="about-text">
            Soy <strong>Daniel Gutiérrez</strong>, desarrollador web con
            experiencia en <strong>Java, Spring, React y Angular</strong>.
            Actualmente continúo formándome y creciendo como profesional gracias
            a mi experiencia dual en <strong>CaixaBank Tech</strong>, donde he
            trabajado en desarrollo backend, QA y arquitectura de APIs.
          </p>

          <p className="about-text">
            Me apasiona crear aplicaciones limpias, eficientes y bien
            estructuradas. Disfruto tanto del frontend como del backend, y me
            encanta aprender nuevas tecnologías, mejorar mis habilidades y
            enfrentar retos que me hagan crecer.
          </p>

          <p className="about-text">
            Fuera del código, me gusta el deporte, los videojuegos y pasar
            tiempo con amigos y familia. Siempre busco equilibrar mi vida
            personal con mi crecimiento profesional.
          </p>
        </div>
      </div>

      {/* ===== Bloque inferior: currículum ===== */}
      <div className="cv-container">

        {/* Formación académica */}
        <div className="cv-column">
          <h3 className="cv-heading">Formación académica</h3>

          <div className="cv-timeline">
            <div className="cv-item">
              <span className="cv-date">2024 – 2026</span>
              <h4 className="cv-role">Grado Superior Desarrollo de Aplicaciones Web</h4>
              <p className="cv-place">I.E.S. Jacarandá</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2024</span>
              <h4 className="cv-role">Curso de Aprendizaje Cooperativo (150h)</h4>
              <p className="cv-place">Universidad Nebrija</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2019 – 2023</span>
              <h4 className="cv-role">Graduado en Educación Primaria</h4>
              <p className="cv-place">Facultad Ciencias de la Educación, Universidad de Sevilla</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2017 – 2019</span>
              <h4 className="cv-role">
                Técnico Superior en Animación de Actividades Físicas y Deportivas
              </h4>
              <p className="cv-place">CESUR CAFD</p>
            </div>
          </div>
        </div>

        {/* Experiencia laboral */}
        <div className="cv-column">
          <h3 className="cv-heading">Experiencia laboral</h3>

          <div className="cv-timeline">
            <div className="cv-item">
              <span className="cv-date">2025 – 2026</span>
              <h4 className="cv-role">Formación Dual — CaixaBank Tech (Sevilla)</h4>
              <p className="cv-place">CaixaBank</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2025 - Actualidad</span>
              <h4 className="cv-role">Monitor</h4>
              <p className="cv-place">Crea Animación</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2018 – 2025</span>
              <h4 className="cv-role">Monitor Escuelas Deportivas</h4>
              <p className="cv-place">Escuela Fútbol Base Carmona</p>

            </div>

            <div className="cv-item">
              <span className="cv-date">2022 – 2024</span>
              <h4 className="cv-role">Profesor Particular</h4>
              <p className="cv-place">Autónomo</p>
            </div>

            <Link to="/experiencia" className="cv-link-btn">
              Ver con detalle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
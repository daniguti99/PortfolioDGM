import "../styles/home.css";
import foto2 from "../assets/foto2.jpeg";
import javaImg from "../assets/java.png";
import springImg from "../assets/spring.png";
import reactImg from "../assets/react.png";
import angularImg from "../assets/angular.png";
import tsImg from "../assets/ts.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-glow" aria-hidden="true" />

      <div className="home-main">
        <div className="home-img-wrapper">
          <img
            src={foto2}
            alt="Daniel Gutiérrez"
            className="home-img"
          />
        </div>

        <span className="home-tag">Disponible para nuevos proyectos</span>

        <h1 className="home-title">
          Hola, soy <span>Daniel Gutiérrez</span>
        </h1>

        <p className="home-role">Desarrollador Web Junior Full Stack</p>

        <p className="home-description">
          Empecé por curiosidad y me quedé por pasión: entender cómo funcionan
          las cosas, romperlas y volver a construirlas mejor. Hoy construyo{" "}
          <strong>experiencias fluidas y bien pensadas</strong>, con la misma
          curiosidad del primer día.
        </p>

        <div className="home-buttons">
          <Link to="/proyectos" className="home-btn-primary">
            Ver proyectos
          </Link>

          <Link to="/contacto" className="home-btn-secondary">
            Contactar
          </Link>
        </div>
      </div>

      {/* ===== Fila de stats ===== */}
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-stat-number">7+</span>
          <span className="home-stat-label">Años de experiencia combinada</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat">
          <span className="home-stat-number">10+</span>
          <span className="home-stat-label">Tecnologías dominadas</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat">
          <span className="home-stat-number">2025-26</span>
          <span className="home-stat-label">Formación Dual en CaixaBank Tech</span>
        </div>
        <div className="home-stat-divider" />
        <div className="home-stat">
          <span className="home-stat-number">100%</span>
          <span className="home-stat-label">Disponibilidad para viajar</span>
        </div>
      </div>

      {/* ===== Fila de tecnologías ===== */}
      <div className="home-tech">
        <img src={javaImg} alt="Java" />
        <img src={springImg} alt="Spring" />
        <img src={reactImg} alt="React" />
        <img src={angularImg} alt="Angular" />
        <img src={tsImg} alt="TypeScript" />
      </div>
    </section>
  );
}
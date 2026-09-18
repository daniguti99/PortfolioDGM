import { useState } from "react";
import "../styles/projects.css";

// LOGOS
import logoZportia from "../assets/logozportia.png";

// GALERÍA ZPORTIA
import ImgZportia1 from "../assets/ImgZportia1.png";
import ImgZportia2 from "../assets/ImgZportia2.png";
import ImgZportia3 from "../assets/ImgZportia3.png";
import ImgZportia4 from "../assets/ImgZportia4.png";
import ImgZportia5 from "../assets/ImgZportia5.png";
import ImgZportia6 from "../assets/ImgZportia6.png";
import ImgZportia7 from "../assets/ImgZportia7.png";
import dgm from "../assets/dgm.jpg";

// VIDEO
import videoZportia from "../assets/VideoZportia.mp4";

export default function Projects() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section className="projects">
      <div className="projects-container">

        <h2 className="projects-title">Proyectos</h2>

        <p className="projects-subtitle">
          Aquí puedes ver algunos de los proyectos que he desarrollado, incluyendo
          aplicaciones reales, proyectos académicos y trabajos personales.
        </p>

        <div className="projects-list">
          {/* ===== ZPORTIA ===== */}
          <div className="project-card">
            <div className="project-content">

              {/* Logo pequeño */}
              <div className="project-logo-small">
                <img src={logoZportia} alt="Logo Zportia" />
              </div>

              <h3 className="project-title">Zportia — Proyecto Final DAW</h3>

              <p className="project-description">
                Plataforma social deportiva desarrollada como proyecto final
                del ciclo DAW. Incluye autenticación segura con JWT, gestión
                completa de usuarios, sistema de publicaciones con imágenes y
                vídeos, relaciones sociales, panel de administración y
                despliegue en producción.
              </p>

              <ul className="project-highlights">
                <li>Frontend con React + componentes reutilizables</li>
                <li>Backend con Java + Spring Boot</li>
                <li>Base de datos MySQL con modelo relacional completo</li>
                <li>Autenticación, roles y seguridad con JWT</li>
                <li>Integración con Cloudinary para gestión multimedia</li>
                <li>Despliegue en servidor (Render + Vercel)</li>
              </ul>

              <div className="project-links">
                <a
                  href="https://zportia-frontend-xgjy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Proyecto desplegado
                </a>

                <a
                  href="https://github.com/JacarandaOlias/api-25-26-daniguti99.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Repositorio Backend
                </a>

                <a
                  href="https://github.com/daniguti99/Zportia-frontend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Repositorio Frontend
                </a>
              </div>

              {/* ===== GALERÍA ===== */}
              <div className="project-gallery">
                {[
                  ImgZportia1,
                  ImgZportia2,
                  ImgZportia3,
                  ImgZportia4,
                  ImgZportia5,
                  ImgZportia6,
                  ImgZportia7
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Zportia captura ${i + 1}`}
                    onClick={() => setLightboxImg(src)}
                  />
                ))}
              </div>

              {/* ===== VÍDEO ===== */}
              <div className="project-video">
                <p className="project-description">Vídeo explicativo del proyecto</p>
                <video controls>
                  <source src="https://res.cloudinary.com/dwxrhwvvk/video/upload/v1789721260/VideoZportia.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de vídeo.
                </video>
              </div>
            </div>
          </div>

          {/* ===== PORTFOLIO ===== */}
          <div className="project-card">
            <div className="project-content">

              {/* Logo pequeño */}
              <div className="project-logo-small">
                <img src={dgm} alt="Logo Portfolio" />
              </div>

              <h3 className="project-title">Portfolio Personal</h3>

              <p className="project-description">
                Proyecto desarrollado con React + TypeScript y Vite, diseñado
                para mostrar mi perfil profesional, experiencia, habilidades
                y proyectos. Incluye integración con EmailJS, animaciones,
                diseño responsive y componentes reutilizables.
              </p>

              <ul className="project-highlights">
                <li>React + TypeScript + Vite</li>
                <li>Diseño moderno y responsive</li>
                <li>Integración con EmailJS</li>
                <li>Componentes reutilizables y arquitectura limpia</li>
              </ul>

              <div className="project-links">
                <a
                  href="https://github.com/daniguti99/PortfolioDGM.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>


          {/* ===== OTROS PROYECTOS ===== */}
          <div className="project-card project-card-simple">
            <div className="project-content">
              <h3 className="project-title">Otros proyectos</h3>

              <p className="project-description">
                También he desarrollado pequeños proyectos y prácticas que me
                han permitido mejorar mis habilidades tanto en frontend como
                en backend.
              </p>

              <ul className="project-highlights">
                <li>Mini apps con React y Angular</li>
                <li>APIs REST con Spring Boot</li>
                <li>Pruebas con JUnit</li>
                <li>Proyectos de aprendizaje y experimentación</li>
              </ul>
            </div>
          </div>

      {/* ===== PRÓXIMAMENTE ===== */}
      <div className="project-coming-soon">
        <div className="coming-soon-badge">
          <span className="coming-soon-dot"></span>
          Próximamente
        </div>
        <h3 className="coming-soon-title">Nuevos proyectos en camino</h3>
        <p className="coming-soon-text">
          Sigo trabajando en nuevas ideas y aplicaciones. Vuelve pronto para
          ver qué he estado construyendo.
        </p>
      </div>
      </div>
        </div>


      {/* ===== LIGHTBOX ===== */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Vista ampliada" />

          <button
            className="lightbox-close"
            onClick={() => setLightboxImg(null)}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}

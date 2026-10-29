import { useState } from "react";
import "../styles/projects.css";

// LOGOS
import logoZportia from "../assets/logozportia.png";
import logoProfe from "../assets/logoprofe.svg";

//GALERÍA PROFE (descomentar cuando se añadan las capturas a ../assets/)
import ImgProFE1 from "../assets/ImgProFE1.png";
import ImgProFE2 from "../assets/ImgProFE2.png";
import ImgProFE3 from "../assets/ImgProFE3.png";
import ImgProFE4 from "../assets/ImgProFE4.png";
import ImgProFE5 from "../assets/ImgProFE5.png";
import ImgProFE6 from "../assets/ImgProFE6.png";

// GALERÍA ZPORTIA
import ImgZportia1 from "../assets/ImgZportia1.png";
import ImgZportia2 from "../assets/ImgZportia2.png";
import ImgZportia3 from "../assets/ImgZportia3.png";
import ImgZportia4 from "../assets/ImgZportia4.png";
import ImgZportia5 from "../assets/ImgZportia5.png";
import ImgZportia6 from "../assets/ImgZportia6.png";
import ImgZportia7 from "../assets/ImgZportia7.png";
import dgm from "../assets/dgm.jpg";

// VIDEO (descomentar cuando vuelva a existir ../assets/VideoZportia.mp4)
// import videoZportia from "../assets/VideoZportia.mp4";

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

              {/* ===== VÍDEO =====
                  Descomentar cuando se copie VideoZportia.mp4 a ../assets/
                  y el import de VIDEO al principio del archivo:

              <div className="project-video">
                <p className="project-description">Vídeo explicativo del proyecto</p>
                <video controls>
                  <source src={videoZportia} type="video/mp4" />
                  Tu navegador no soporta la reproducción de vídeo.
                </video>
              </div>
              */}
            </div>
          </div>

          {/* ===== PROFE ===== */}
          <div className="project-card">
            <div className="project-content">

              {/* Logo pequeño */}
              <div className="project-logo-small">
                <img src={logoProfe} alt="Logo ProFE" />
              </div>

              <div className="project-title-row">
                <h3 className="project-title">ProFE — Plataforma para docentes</h3>
                <span className="project-badge">En producción</span>
              </div>

              <p className="project-description">
                Plataforma desarrollada para docentes que permite organizar su
                programación por ciclos, cursos, unidades didácticas y sesiones.
                Incluye autenticación segura con JWT, registro con foto de perfil,
                catálogo público para explorar y compartir sesiones entre
                profesores, y exportación de sesiones a PDF.
              </p>

              <ul className="project-highlights">
                <li>Desarrollada con flujo SDD: 15 specs, requisitos en EARS y aprobación humana en cada fase</li>
                <li>Agentes planner, implementer y reviewer con permisos mínimos</li>
                <li>Verificación con MCP: Chrome DevTools para interfaz y Context7 para documentación</li>
                <li>Frontend con React 19 + TypeScript + Vite</li>
                <li>Backend con Spring Boot 4.1 + Java 21</li>
                <li>Arquitectura hexagonal (puertos y adapters)</li>
                <li>Base de datos MySQL con scripts de esquema versionados</li>
                <li>Autenticación con JWT, BCrypt y rutas protegidas</li>
                <li>Catálogo público con ordenación, paginación y exportación a PDF</li>
                <li>Registro con foto de perfil (Cloudinary) y documentación con Swagger/OpenAPI</li>
              </ul>

              <div className="project-links">
                <a
                  href="https://profe-frontend-one.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Proyecto desplegado
                </a>

                <a
                  href="https://github.com/daniguti99/ProFE-frontend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Repositorio Frontend
                </a>

                <a
                  href="https://github.com/daniguti99/ProFE-backend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Repositorio Backend
                </a>

                                <a
                  href="https://profe-backend-1.onrender.com/swagger-ui.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Documentación API
                </a>
              </div>

              {//===== GALERÍA ===== 

              <div className="project-gallery">
                {[
                  ImgProFE1,
                  ImgProFE2,
                  ImgProFE3,
                  ImgProFE4, 
                  ImgProFE5,
                  ImgProFE6
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`ProFE captura ${i + 1}`}
                    onClick={() => setLightboxImg(src)}
                  />
                ))}
              </div>
              }
            </div>
          </div>

          {/* ===== TEMIA ===== */}
          <div className="project-card">
            <div className="project-content">

              <div className="project-logo-small project-logo-text">
                <span>T</span>
              </div>

              <div className="project-title-row">
                <h3 className="project-title">TemIA — Estudio con IA</h3>
                <span className="project-badge">En desarrollo</span>
              </div>

              <p className="project-description">
                Aplicación de estudio en la que el usuario sube sus apuntes,
                obtiene resúmenes generados con IA y practica con exámenes tipo
                test corregidos al instante. Es también el banco de pruebas
                donde aplico el flujo SDD completo.
              </p>

              <ul className="project-highlights">
                <li>Backend con Spring Boot 4 y Java 17 bajo arquitectura hexagonal</li>
                <li>Frontend con Angular 20, componentes standalone y estilos por tokens</li>
                <li>Proveedor de IA aislado detrás de un puerto (LlmPort)</li>
                <li>Flujo SDD: US → spec en EARS → plan → tareas → validación</li>
                <li>Agentes coordinator, planner, implementer y reviewer con permisos mínimos</li>
                <li>Verificación con MCP: Chrome DevTools para interfaz y Context7 para documentación</li>
                <li>En desarrollo activo: autenticación y modelo de dominio</li>
              </ul>
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

import "../styles/about.css";
import foto3 from "../assets/dani.jpeg";
import iaImg from "../assets/IA.jpg";

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

      {/* ===== Bloque medio: IA aplicada al desarrollo ===== */}
      <div className="ai-block">

        {/* Imagen del bloque */}
        <div className="ai-img">
          <img src={iaImg} alt="Inteligencia artificial aplicada al desarrollo" />
        </div>

        {/* Contenido del bloque */}
        <div className="ai-content">
          <div className="ai-badge">
            <span className="ai-badge-dot"></span>
            IA como disciplina de ingeniería
          </div>

          <h3 className="ai-title">Desarrollo asistido por IA con método propio</h3>

          <p className="ai-text">
            No uso la IA como un autocompletado más rápido. La uso como un
            equipo de ingeniería con roles, permisos y criterios de aceptación:
            cada funcionalidad nace como historia de usuario y se convierte en
            una especificación con requisitos verificables antes de escribir una
            sola línea de código.
          </p>

          <div className="ai-pillars">
            <article className="ai-pillar">
              <h4>Spec-Driven Development</h4>
              <p>
                El ciclo es US → spec → plan → tareas → implementación →
                validación. Nada se implementa sin una spec aprobada, y cada
                spec tiene estado: borrador, aprobada o implementada.
              </p>
            </article>

            <article className="ai-pillar">
              <h4>EARS</h4>
              <p>
                Requisitos escritos con cinco patrones —ubicuo, evento, estado,
                opcional y no deseado—, una obligación por frase y siempre
                observables desde fuera: pantalla, respuesta HTTP o dato
                guardado.
              </p>
            </article>

            <article className="ai-pillar">
              <h4>Sistema multiagente</h4>
              <p>
                Un coordinador reparte fases y no escribe código; el planner
                solo toca US y specs; el implementer ejecuta una única tarea con
                pruebas primero; el reviewer no puede editar nada y valida
                requisito por requisito.
              </p>
            </article>

            <article className="ai-pillar">
              <h4>MCP</h4>
              <p>
                Context7 para contrastar documentación actualizada y Chrome
                DevTools para verificar consola, red y vista móvil. Las
                herramientas entran por protocolo, no pegadas al prompt.
              </p>
            </article>
          </div>

          <div className="ai-flow" aria-label="Ciclo de trabajo con IA">
            <span className="ai-flow-step">US</span>
            <span className="ai-flow-arrow">→</span>
            <span className="ai-flow-step">spec</span>
            <span className="ai-flow-arrow">→</span>
            <span className="ai-flow-step">plan</span>
            <span className="ai-flow-arrow">→</span>
            <span className="ai-flow-step">tareas</span>
            <span className="ai-flow-arrow">→</span>
            <span className="ai-flow-step">implementación</span>
            <span className="ai-flow-arrow">→</span>
            <span className="ai-flow-step">validación</span>
          </div>

          <p className="ai-text">
            El flujo tiene puertas humanas: yo apruebo la spec y el plan, y el
            reviewer cierra con un veredicto trazable. Si algo falla, hay un
            máximo de dos vueltas de corrección; si no se cierra, se para y se
            explica. La arquitectura no se negocia: hexagonal en backend,
            dominio sin dependencias de Spring ni JPA, y proveedor de IA detrás
            de un puerto (<strong>LlmPort</strong>).
          </p>

          <p className="ai-text">
            Lo aplico en <strong>ProFE</strong>, plataforma para docentes
            desplegada en producción, y en <strong>TemIA</strong>, una app de
            estudio con Spring Boot y Angular. El método está empaquetado en un
            kit reutilizable —agentes, skills, constitución y plantillas de
            spec— que me permite arrancar un proyecto nuevo con el flujo ya
            montado.
          </p>

          <p className="ai-text ai-text-closing">
            El resultado no es escribir más rápido: es escribir código
            trazable, donde cada requisito está cubierto por una prueba o una
            comprobación concreta.
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
              <p className="cv-desc">
                Formación orientada a experiencia laboral real, integrado como un
                profesional más dentro del equipo. Participé en tareas de desarrollo
                y funciones de QA, colaborando en la validación, pruebas y calidad
                del software.
              </p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2018 – 2025</span>
              <h4 className="cv-role">Monitor Escuelas Deportivas</h4>
              <p className="cv-place">Escuela Fútbol Base Carmona</p>
              <p className="cv-desc">
                Gestión de grupos, planificación de actividades y desarrollo de
                habilidades de liderazgo, comunicación y trabajo en equipo.
              </p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2022 – 2024</span>
              <h4 className="cv-role">Profesor Particular</h4>
              <p className="cv-place">Autónomo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import "../styles/experience.css";
import caixabankLogo from "../assets/CaixaBankTech.png";
import fbCarmonaLogo from "../assets/fbcarmona.png";
import teacherLogo from "../assets/teacher.png";
import creanimacionLogo from "../assets/creanimacion.png";

export default function Experience() {
  return (
    <section className="experience">
      <h2 className="experience-title">Experiencia</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-logo">
            <img src={caixabankLogo} alt="CaixaBank Tech" />
          </div>

          <div className="timeline-content">
            <h3 className="exp-role">Formación Dual — Desarrollador & QA</h3>
            <p className="exp-company">CaixaBank Tech (Sevilla)</p>
            <p className="exp-date">2025 — 2026</p>

            <p className="exp-description">
              Integración completa dentro de un equipo técnico profesional,
              participando en tareas reales de desarrollo y calidad de software.
              Una experiencia que superó con creces unas prácticas habituales,
              permitiéndome trabajar como un miembro más del equipo.
            </p>

            <ul className="exp-highlights">
              <li>Participación en desarrollo backend con Java y Spring.</li>
              <li>Integración de IA en el flujo de desarrollo con GitHub Copilot y agentes especializados.</li>
              <li>Formación práctica en arquitectura hexagonal y microservicios.</li>
              <li>Validación funcional y técnica de APIs.</li>
              <li>Pruebas manuales y automatizadas en entornos reales.</li>
              <li>Colaboración con equipos QA para asegurar calidad del software.</li>
              <li>Trabajo con metodologías ágiles y herramientas como Rally.</li>
              <li>Mejoras continuas en procesos de testing y documentación.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-logo">
            <img src={fbCarmonaLogo} alt="Escuela Fútbol Base Carmona" />
          </div>

          <div className="timeline-content">
            <h3 className="exp-role">Monitor de Escuelas Deportivas</h3>
            <p className="exp-company">Escuela Fútbol Base Carmona</p>
            <p className="exp-date">2018 — 2025</p>

            <p className="exp-description">
              Gestión de grupos, planificación de actividades y desarrollo de
              habilidades de liderazgo y comunicación en un entorno educativo
              y deportivo. Una etapa clave para mi crecimiento personal y profesional.
            </p>

            <ul className="exp-highlights">
              <li>Dirección y coordinación de grupos de niños y jóvenes.</li>
              <li>Planificación de sesiones deportivas y actividades formativas.</li>
              <li>Desarrollo de habilidades de liderazgo y comunicación.</li>
              <li>Gestión de conflictos y fomento del trabajo en equipo.</li>
              <li>Responsabilidad y organización en eventos y competiciones.</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-logo">
            <img src={creanimacionLogo} alt="Monitor Creanimación" />
          </div>

          <div className="timeline-content">
            <h3 className="exp-role">Monitor</h3>
            <p className="exp-company">Crea Animación</p>
            <p className="exp-date">2025 — Actualidad</p>

            <p className="exp-description">
              Monitor en actividades de animación, deportivas y educativas,
              trabajando con grupos de distintas edades y adaptando cada dinámica
              a las necesidades del grupo. En este puesto he reforzado mi capacidad
              de organización, liderazgo y comunicación con familias.
            </p>

            <ul className="exp-highlights">
              <li>Gestión y dinamización de grupos infantiles y juveniles.</li>
              <li>Responsabilidad en la supervisión y seguridad de los participantes.</li>
              <li>Diseño y ejecución de actividades educativas, deportivas y creativas.</li>
              <li>Fomento de la autonomía, convivencia y habilidades sociales.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-logo">
            <img src={teacherLogo} alt="Profesor Particular" />
          </div>

          <div className="timeline-content">
            <h3 className="exp-role">Profesor Particular</h3>
            <p className="exp-company">Autónomo</p>
            <p className="exp-date">2022 — 2024</p>

            <p className="exp-description">
              Apoyo académico personalizado, adaptado a las necesidades de cada
              estudiante, fomentando el aprendizaje autónomo y el desarrollo
              de habilidades educativas.
            </p>

            <ul className="exp-highlights">
              <li>Preparación de clases adaptadas a cada alumno.</li>
              <li>Refuerzo en materias clave y técnicas de estudio.</li>
              <li>Desarrollo de habilidades educativas y autonomía.</li>
              <li>Comunicación constante con familias para seguimiento.</li>
            </ul>
          </div>
        </div>



      </div>
    </section>
  );
}
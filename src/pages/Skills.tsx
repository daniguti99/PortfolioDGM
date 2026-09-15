import "../styles/skills.css";

// IMPORTS DE IMÁGENES (según tu carpeta src/assets)
import javaImg from "../assets/java.png";
import springImg from "../assets/spring.png";
import reactImg from "../assets/react.png";
import angularImg from "../assets/angular.png";
import tsImg from "../assets/ts.png";
import jsImg from "../assets/js.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import phpImg from "../assets/php.png";
import pythonImg from "../assets/python.png";

import mysqlImg from "../assets/mysql.png";
import oracleImg from "../assets/oracle.png";

import junitImg from "../assets/junit.png";

import dockerImg from "../assets/docker.png";
import githubImg from "../assets/github.png";
import rallyImg from "../assets/rally.png";
import intellijImg from "../assets/intellij.png";
import vscodeImg from "../assets/visual.png";
import viteImg from "../assets/vite.svg";
import scrumImg from "../assets/scrum.png";

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">

        <h2 className="skills-title">Skills Técnicas</h2>

        <div className="skills-grid">

          {/* Tecnologías */}
          <div className="skill-item">
            <img src={javaImg} alt="Java" />
            <span>Java</span>
          </div>

          <div className="skill-item">
            <img src={springImg} alt="Spring" />
            <span>Spring</span>
          </div>

          <div className="skill-item">
            <img src={reactImg} alt="React" />
            <span>React</span>
          </div>

          <div className="skill-item">
            <img src={angularImg} alt="Angular" />
            <span>Angular</span>
          </div>

          <div className="skill-item">
            <img src={tsImg} alt="TypeScript" />
            <span>TypeScript</span>
          </div>

          <div className="skill-item">
            <img src={jsImg} alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="skill-item">
            <img src={htmlImg} alt="HTML" />
            <span>HTML</span>
          </div>

          <div className="skill-item">
            <img src={cssImg} alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="skill-item">
            <img src={phpImg} alt="PHP" />
            <span>PHP</span>
          </div>

          <div className="skill-item">
            <img src={pythonImg} alt="Python" />
            <span>Python</span>
          </div>

          {/* Bases de datos */}
          <div className="skill-item">
            <img src={mysqlImg} alt="MySQL" />
            <span>MySQL</span>
          </div>

          <div className="skill-item">
            <img src={oracleImg} alt="Oracle" />
            <span>Oracle</span>
          </div>

          {/* Testing */}
          <div className="skill-item">
            <img src={junitImg} alt="JUnit" />
            <span>JUnit</span>
          </div>

          {/* Herramientas */}
          <div className="skill-item">
            <img src={dockerImg} alt="Docker" />
            <span>Docker</span>
          </div>

          <div className="skill-item">
            <img src={githubImg} alt="GitHub" />
            <span>GitHub</span>
          </div>

          <div className="skill-item">
            <img src={rallyImg} alt="Rally Software" />
            <span>Rally Software</span>
          </div>

          <div className="skill-item">
            <img src={intellijImg} alt="IntelliJ IDEA" />
            <span>IntelliJ IDEA</span>
          </div>

          <div className="skill-item">
            <img src={vscodeImg} alt="VSCode" />
            <span>VSCode</span>
          </div>

          <div className="skill-item">
            <img src={viteImg} alt="Vite" />
            <span>Vite</span>
          </div>

          <div className="skill-item">
            <img src={scrumImg} alt="Scrum" />
            <span>Scrum</span>
          </div>
        </div>

        <h2 className="skills-title">Skills Profesionales</h2>

        <div className="skills-list">
          <div className="skill-soft">Organización</div>
          <div className="skill-soft">Adaptabilidad</div>
          <div className="skill-soft">Trabajo en equipo</div>
          <div className="skill-soft">Actitud resolutiva</div>
          <div className="skill-soft">Comunicación</div>
          <div className="skill-soft">Liderazgo</div>
          <div className="skill-soft">Gestión de grupos</div>
          <div className="skill-soft">Planificación</div>
          <div className="skill-soft">Aprendizaje constante</div>
          <div className="skill-soft">Capacidad de análisis</div>
          <div className="skill-soft">Atención al detalle</div>
          <div className="skill-soft">Responsabilidad</div>
          <div className="skill-soft">Cooperación</div>
        </div>

        <h2 className="skills-title">Skills Transversales</h2>

        <div className="skills-list">
          <div className="skill-soft">Inglés B2</div>
          <div className="skill-soft">Metodologías ágiles</div>
          <div className="skill-soft">Disponibilidad para viajar</div>
          <div className="skill-soft">Carnet de conducir y coche propio</div>
          <div className="skill-soft">Experiencia docente</div>
          <div className="skill-soft">Experiencia deportiva</div>
        </div>

      </div>
    </section>
  );
}

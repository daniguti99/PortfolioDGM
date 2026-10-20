import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        Daniel<span>Gutiérrez</span>
      </h2>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/sobre-mi"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Sobre mí
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/experiencia"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Experiencia
        </NavLink>

        <NavLink
          to="/proyectos"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Proyectos
        </NavLink>

        <NavLink
          to="/contacto"
          className="navbar-cta"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
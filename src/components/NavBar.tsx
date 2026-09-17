import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navbar-link active" : "navbar-link";

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        Daniel<span>Gutiérrez</span>
      </h2>

      {/* Botón hamburguesa (solo visible en móvil) */}
      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
          Inicio
        </NavLink>

        <NavLink to="/sobre-mi" className={linkClass} onClick={() => setIsOpen(false)}>
          Sobre mí
        </NavLink>

        <NavLink to="/skills" className={linkClass} onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>

        <NavLink to="/experiencia" className={linkClass} onClick={() => setIsOpen(false)}>
          Experiencia
        </NavLink>

        <NavLink to="/proyectos" className={linkClass} onClick={() => setIsOpen(false)}>
          Proyectos
        </NavLink>

        <NavLink to="/contacto" className="navbar-cta" onClick={() => setIsOpen(false)}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
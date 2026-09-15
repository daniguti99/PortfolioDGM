import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {year} <span>Daniel Gutiérrez</span> — Portfolio
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/daniguti99"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-guti%C3%A9rrez-moreno-960a33175/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <a
            href="mailto:dgm1021999@gmail.com"
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

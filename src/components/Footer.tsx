import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} roque LABS. Todos os direitos
        reservados.
      </p>
      <p>
        Entre em contato:{" "}
        <a href="mailto:contato@roquelabs.com">contato@roquelabs.com</a>
      </p>
    </footer>
  );
};

export default Footer;

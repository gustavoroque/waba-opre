import React from "react";
import { Link } from "react-router-dom";
import Logo from "@components/Logo";
import capa from "@assets/images/capa.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-banner">
        <img src={capa} alt="Capa Roque Labs" className="header-capa" />
      </div>
      <div className="header-content">
        <div className="logo">
          <Logo height="50px" />
        </div>
        <h1>roque LABS</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/politica-comercial">Política Comercial</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

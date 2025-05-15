import React from "react";
import logo from "@assets/images/logo.png";

interface LogoProps {
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ height = "50px" }) => {
  return <img src={logo} alt="Roque Labs Logo" style={{ height }} />;
};

export default Logo;

import React from "react";
import { Logo } from "@interfaces/common";

interface LogoProps {
  logo: Logo;
}

const Logo2: React.FC<LogoProps> = ({ logo }) => {
  const firstName = logo.name.split(" ")[0];

  return (
    <div>
      <div className="header__logo">
        <h1 className="header__logo__title">{firstName}</h1>
      </div>
    </div>
  );
};

export default Logo2;

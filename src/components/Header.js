import React from "react";
import { NavLink } from "react-router-dom";

import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <NavLink className={headerStyles.title} to="/">
          SIMT Client
        </NavLink>
      </h1>
    </header>
  );
};

export default Header;

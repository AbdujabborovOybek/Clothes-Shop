import React, { memo } from "react";
import "./Header.css";

export const Header = memo(() => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top__left">
          <a href=".">Одежда</a>
        </div>

        <div className="header-top__center">
          <a href=".">Sale</a>
          <a href=".">Женщинам</a>
          <a href=".">Мужчинам</a>
          <a href=".">детям</a>
        </div>
      </div>
    </header>
  );
});

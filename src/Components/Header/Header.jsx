import React, { memo } from "react";
import "./Header.css";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { MdMenu } from "react-icons/md"; // MdMenuOpen
import { NavLink, Link } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top__left">
          <button type="button">
            <MdMenu />
          </button>

          <Link to="/">Одежда</Link>
        </div>

        <div className="header-top__center">
          <NavLink to="/sale">Sale</NavLink>
          <NavLink to="/women">Женщинам</NavLink>
          <NavLink to="/men">Мужчинам</NavLink>
          <NavLink to="/children">детям</NavLink>
        </div>

        <div className="header-top-right">
          <button>
            <AiOutlineSearch />
          </button>

          <Link to="/login">
            <AiOutlineUser />
          </Link>

          <Link to="/favorites">
            <AiOutlineHeart />
          </Link>

          <Link to="/cart">
            <AiOutlineShopping />
          </Link>
        </div>
      </div>
      <nav className="header-navbar">
        <a href=".">новинки</a>
        <a href=".">одежда</a>
        <a href=".">Обувь</a>
        <a href=".">аксессуары</a>
        <a href=".">Любимые бренды</a>
      </nav>
    </header>
  );
});

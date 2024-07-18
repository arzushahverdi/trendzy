import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbarmain}>
      <img
        src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663478f10d661c2963836ced_trendzy.svg"
        alt="logo"
      />
      <div className={style.pages}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <select>
          <option value="Pages">Pages</option>
        </select>
      </div>
      <div className={style.icons}>
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663379bf489cecb2de5cf557_search-icon.svg"
          alt="search-icon"
        />
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663379bb79f239e9b04b93a2_cart-icon.svg"
          alt="cart-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;

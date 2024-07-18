import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.mainsection}>
      <img src="" alt="" />
      <h1>The hidden gems in fashion trends</h1>
      <p>
        Step into the realm of unparalleled style with our unbeatable t-shirt
        trendsetter of today.
      </p>
      <div className={style.mainbuttons}>
        <button>Shop Women</button>
        <button>Shop Men</button>
      </div>
    </div>
  );
};

export default Main;

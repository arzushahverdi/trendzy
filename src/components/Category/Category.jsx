import React from "react";
import style from "./Category.module.css";

const Category = () => {
  return (
    <div className={style.categorymain}>
      <p>
        Love the quality and style of the clothes I ordered from this website!
        The shipping was super fast too. Definitely my go-to for trendy fashion
        finds!
      </p>
      <img
        src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/6607d6242dac2527efd04d35_ratting-half.svg"
        alt=""
        width="100.5px"
        height="18px"
        className={style.stars}
      />
      <div className={style.categoryImg}>
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371ef9d6b58d55405bd76_cl-logo-dark-01.svg"
          alt="Artistry"
          width="109.41px"
          height="30px"
        />
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fa01ad57b79620c213_cl-logo-dark-02.svg"
          alt="Dexign"
          width="96.47px"
          height="30px"
        />
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fadbde7755b5ea310e_cl-logo-dark-03.svg"
          alt="Emblem"
          width="112.94px"
          height="30px"
        />
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fa6d681ae8fb3a84e7_cl-logo-dark-04.svg"
          alt="Grapherz"
          width="118.84px"
          height="30px"
        />
      </div>
      <div className={style.allproducts}>
        <img
          src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607db64f61d2d8da10d113b_men-p-800.jpg"
          alt="men"
          width="469.7px"
          height="484.14px"
        />
        <div className={style.viewProducts}>
          <h1>Shop by category</h1>
          <button>View All Products</button>
          <div className={style.twoImg}>
            <img
              src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607db6de825fc2c60ca4ce2_women-p-500.jpg"
              alt="girl"
              width="298.14px"
              height="298.16px"
            />
            <img
              src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607dc963f551ea6b785022f_kid-p-500.jpg"
              alt="kid"
              width="298.16px"
              height="298.16px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

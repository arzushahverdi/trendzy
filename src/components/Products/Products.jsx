import React from "react";
import style from "./Products.module.css";

const Products = (props) => {
  console.log(props, "props");
  return (
    <div className={style.productsmain}>
      <h3>Recent products</h3>
      <div className={style.productsGrid}>
        {props.data.map((item) => (
          <div className={style.productsBox}>
            <div className={style.productsGender}>{item.gender}</div>
            <div className={style.productsImg}>
              <img src={item.imageSrc} alt="" width="200px" />
            </div>
            <div className={style.productsName}>{item.productName}</div>
            <div className={style.productsPrice}>$ {item.price} USD</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

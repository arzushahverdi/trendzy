import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const products = [
    {
      gender: "Men",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315432dea49e372cc4cfb_pr-01-hover-p-500.jpg",
      productName: "Urban edge men's tee",
      price: 49.0,
    },
    {
      gender: "Women",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/66331559a9ad3c19e59b86c5_pr-02-p-500.jpg",
      productName: "Retro revival t-shirt",
      price: 105.49,
    },
    {
      gender: "Men",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6633156ac9e737b98d1d4d20_pr-03-p-500.jpg",
      productName: "Adventure seeker tee",
      price: 80.49,
    },
    {
      gender: "Women",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315906d37ff427395ddd5_pr-04-p-500.jpg",
      productName: "Classic comfort crewneck",
      price: 49.0,
    },
    {
      gender: "Men",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315aaaeb0ea524945c6b3_pr-05-p-500.jpg",
      productName: "Athletic performance tee",
      price: 79.49,
    },
    {
      gender: "Men",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315b9bcfcb0aa45519350_pr-06-p-500.jpg",
      productName: "Weekend warrior t-shirt",
      price: 40.0,
    },
    {
      gender: "Men",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315f0b40d5879f9b54a31_pr-07-p-500.jpg",
      productName: "Vintage vibes graphic tee",
      price: 47.0,
    },
    {
      gender: "Women",
      imageSrc:
        "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/66331619a80d73b98ad9f8d4_pr-08-p-500.jpg",
      productName: "Romantic ruffle tee",
      price: 35.49,
    },
  ];

  return (
    <Fragment>
      <Navbar />
      <Main />
      <Products data={products} />
      <Category />
      <Footer />
    </Fragment>
  );
}

export default App;

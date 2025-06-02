import React from "react";
import "./Products.css";
import Driver from "../../assets/Driver.jpg";
import Phone from "../../assets/Phone.jpg";
import Pc from "../../assets/Pc.jpg";
import arrow from "../../assets/arrow.webp";

const Products = () => {
  return (
    <div className="MyProducts">
      <h3 className="pro">Our products</h3>
      <div>
        <img className="product_image" src={Driver} alt="" />
        <img className="product_image" src={Phone} alt="" />
        <img className="product_image" src={Pc} alt="" />
      </div>
    </div>
  );
};

export default Products;

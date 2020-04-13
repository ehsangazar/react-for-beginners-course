import React, { useContext } from 'react'
import Button from '../Button/Button'
import Image from "../Image/Image";
import "./ProductItem.css";
import ThemeContext from "../../contexts/ThemeContext";

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  return (
    <li className="ProductItem">
      <h3>{data.name}</h3>
      <Image imgSrc={data.image} />
      <span>Price: {data.price}</span>
      <Button
        style={{
          color: themeValues.theme.color,
          borderColor: themeValues.theme.color,
        }}
      >
        Add to Cart
      </Button>
    </li>
  );
};

export default ProductItem
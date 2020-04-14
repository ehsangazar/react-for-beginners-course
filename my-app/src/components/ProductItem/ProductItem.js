import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import Image from "../Image/Image";
import "./ProductItem.css";
import ThemeContext from "../../contexts/ThemeContext";
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md"; 

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(!added);
  }

  return (
    <li className="ProductItem">
      <h3>{data.name}</h3>
      <Image imgSrc={data.image} />
      <span>Price: {data.price}</span>
      <Button
        handleClick={handleAdd}
        style={{
          color: themeValues.theme.color,
          borderColor: themeValues.theme.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {added ? (
          <>
            <MdRemoveShoppingCart />
            Remove from Cart
          </>
        ) : (
          <>
            <MdAdd />
            Add to Cart
          </>
        )}
      </Button>
    </li>
  );
};

export default ProductItem
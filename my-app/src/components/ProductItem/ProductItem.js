import React, { useContext, useState, useReducer } from 'react'
import Button from '../Button/Button'
import Image from "../Image/Image";
import "./ProductItem.css";
import ThemeContext from "../../contexts/ThemeContext";
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md"; 
import ProductItemReducer from './ProductItem.reducer';


const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  const [state,dispatch] = useReducer(ProductItemReducer,{
    added: false,
  })

  const handleAdd = () => {
    if (state.added) {
      dispatch({
        type: "REMOVE_FROM_CART"
      })
    } else {
      dispatch({
        type: "ADD_TO_CART",
      });
    }
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
        {state.added ? (
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
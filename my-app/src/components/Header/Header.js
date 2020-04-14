import React, { useContext } from 'react'
import './Header.css'
import NavBar from './../NavBar/Navbar'
import { useLocation } from 'react-router-dom'
import CartContext from "../../contexts/CartContext";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  let { pathname } = useLocation();
  let title = '';
  const { carts } = useContext(CartContext);

  switch (pathname) {
    case '/':
      title = 'Shop'
      break;
    case '/about':
      title = 'About'
      break;
    case '/blog':
      title = 'Blog'
      break;
    case '/contact':
      title = 'Contact'
      break;
    default:
      break;
  }

  return (
    <div className="Header">
      <div className="TopBar">
        <NavBar />
        <div className="Cart">
          <h4>{carts.length}</h4>
          <MdShoppingCart />
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Header
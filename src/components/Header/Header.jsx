import React from "react";
import "./Header.scss";
import ICON from "../../assets/header/pizza_header.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
const Header = ({valueText, setValueText}) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo_pizza">
          <img width={40} src={ICON} alt="icon_pizza" />
          <div className="text_logo">
            <h3>REACT PIZZA</h3>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Search valueText={valueText} setValueText={setValueText} />
      <div className="basket">
        <span>5</span>
        <span>|</span>
        <span>3</span>
      </div>
    </header>
  );
};

export default Header;

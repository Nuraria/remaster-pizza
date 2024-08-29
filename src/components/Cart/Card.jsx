import React from "react";
import "./Card.scss";

import PIZZA from "../../img/chees.jpg";

const Cart = () => {
  return (
    <div className="card">
      <img width={260} src={PIZZA} alt="pizza_img" />
      <h4>Сырная</h4>
      <div className="description">
        <div className="option">
          <span>тонкое</span>
          <span className="unact">традиционное</span>
        </div>
        <div className="option2">
          <span>26 см.</span>
          <span>30 см.</span>
          <span className="unact">40 см.</span>
        </div>
      </div>
      <div className="bottom_pannel">
        <div className="cena">от 395 ₽</div>
        <button className="active_button">
          + Добавить
          <div className="circle">
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;

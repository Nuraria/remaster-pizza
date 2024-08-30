import { useState } from "react";
import "./Card.scss";

import PIZZA from "../../img/chees.jpg";

const Cart = ({ title, price, sizes, types }) => {
  const [count, setCount] = useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveTypes] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="card">
      <img width={260} src={PIZZA} alt="pizza_img" />
      <h4>{title}</h4>
      <div className="description">
        <div className="option">
          {types.map((type) => (
            <span
              className={activeType === type ? "" : "unact"}
              onClick={() => setActiveTypes(type)}
              key={type}
            >
              {typeNames[type]}
            </span>
          ))}
          {/* <span>тонкое</span>
          <span className="unact">традиционное</span> */}
        </div>
        <div className="option2">
          {sizes.map((size, index) => (
            <span
              className={activeSize === index ? "" : "unact"}
              onClick={() => setActiveSize(index)}
              key={index}
            >
              {size} см.
            </span>
          ))}
          {/* <span>26 см.</span>
          <span>30 см.</span>
          <span className="unact">40 см.</span> */}
        </div>
      </div>
      <div className="bottom_pannel">
        <div className="cena">{price} ₽</div>
        <button className="active_button" onClick={() => setCount(count + 1)}>
          + Добавить
          <div className="circle">
            <span>{count}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;

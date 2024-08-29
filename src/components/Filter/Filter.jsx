import React from "react";
import "./Filter.scss";
import ARROW from "../../assets/svg/Vector.svg";

const Filter = () => {
  return (
    <>
      <div className="filter">
        <div className="filter_bubble_container">
          <div className="filter_bubble_active">Все</div>
          <div className="filter_bubble">Мясные</div>
          <div className="filter_bubble">Вегетарианская</div>
          <div className="filter_bubble">Гриль</div>
          <div className="filter_bubble">Острые</div>
          <div className="filter_bubble">Закрытые</div>
        </div>

        <div className="sort_by">
          <img src={ARROW} alt="arrow" />
          <p>
            Сортировка по: <span>популярности</span>
          </p>
        </div>
      </div>
      <h1>Все пиццы</h1>
    </>
  );
};

export default Filter;

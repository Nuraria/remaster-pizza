import React from "react";
import "./Filter.scss";
import ARROW from "../../assets/svg/Vector.svg";

// import PopUp from "../PopUp/PopUp";

const Filter = () => {
  const [category, setCategory] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [open, setOpen] = React.useState(false);
  console.log(open);
  const sort = ["популярности", "по цене", "по алфавиту"];
  const [sortCategory, setSortCategory] = React.useState(0);
  const closePopUp = (index) => {
    setSortCategory(index);
    setOpen(false);
  };

  return (
    <>
      <div className="filter">
        <div className="filter_bubble_container">
          {categories.map((name, index) => (
            <div
              key={index}
              onClick={() => setCategory(index)}
              className={
                category === index ? "filter_bubble_active" : "filter_bubble"
              }
            >
              {name}
            </div>
          ))}
          {/*
          <div className="filter_bubble_active">Все</div>
          <div className="filter_bubble">Мясные</div>
          <div className="filter_bubble">Вегетарианская</div>
          <div className="filter_bubble">Гриль</div>
          <div className="filter_bubble">Острые</div>
          <div className="filter_bubble">Закрытые</div> */}
        </div>

        <div className="sort_by">
          <img src={ARROW} alt="arrow" />
          <p>
            Сортировка по:
            <span onClick={() => setOpen(!open)}> {sort[sortCategory]}</span>
          </p>
          {open && (
            <div className="PopUp">
              {sort.map((sortItem, index) => (
                <span
                  onClick={() => closePopUp(index)}
                  className={sortCategory === index ? "active" : ""}
                  key={index}
                >
                  {sortItem}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <h1>Все пиццы</h1>
    </>
  );
};

export default Filter;

import React from "react";
import "./Filter.scss";
import ARROW from "../../assets/svg/Vector.svg";

import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

// import PopUp from "../PopUp/PopUp";


const Filter = ({ categoryId, onClickCategory, sort }) => {
  // const [category, setCategory] = React.useState(0);
  const dispatch= useDispatch();
  const sortType = useSelector(state => state.filter.sort);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [open, setOpen] = React.useState(false);
  // const [sortCategory, setSortCategory] = React.useState(0);
  const closePopUp = (index) => {
    // onClickSort(index);
    dispatch(setSort(index))
    setOpen(false);
  };

  return (
    <>
      <div className="filter">
        <div className="filter_bubble_container">
          {categories.map((name, index) => (
            <div
              key={index}
              onClick={() => onClickCategory(index)}
              className={
                categoryId === index ? "filter_bubble_active" : "filter_bubble"
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
            <span onClick={() => setOpen(!open)}> {sortType.namee}</span>
          </p>
          {open && (
            <div className="PopUp">
              {sort.map((obj, index) => (
                <span
                  onClick={() => closePopUp(obj)}
                  className={sortType.sortProperty === obj.sortProperty ? "active" : ""}
                  key={index}
                >
                  {obj.namee}
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

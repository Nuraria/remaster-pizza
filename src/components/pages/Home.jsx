import React from "react";
import Skeleton from "../Cart/Skeleton.jsx";
import Filter from "../Filter/Filter.jsx";
import Card from "../Cart/Card.jsx";
import Pagination from "../Pagination/";
// import ReactPaginate from "react-paginate";
import { AppContext } from "../../App.js";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.js";

const Home = () => {
  // const [categoryId, setCategoryId] = React.useState(0);
  // заменили обычный state на тот что создали в store
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { valueText } = React.useContext(AppContext);
  //https://662be852de35f91de159e148.mockapi.io/
  // const [sortType, setSortType] = React.useState({
  //   namee: "популрности",
  //   sortProperty: "rating",
  // });
  const [pizzas, setPizzas] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const sortBy = sortType.replace("-", "");
  const order = sortType.includes("-") ? "asc" : "desc";
  const categoryBy = categoryId > 0 ? `category=${categoryId}` : "";
  const search = valueText ? `&search=${valueText}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://662be852de35f91de159e148.mockapi.io/pizzas?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
        // setTimeout(() => {
        //   setPizzas(json);
        //   setIsLoading(false);
        // }, 1500);
      });
  }, [categoryId, sortType, valueText, currentPage]);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      <Filter
        categoryId={categoryId}
        onClickCategory={(i) => onChangeCategory(i)}
      />
      <div className="card_content">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas
              // .filter((pizzas) => {
              //   if (pizzas.title.toLowerCase().includes(valueText)) {
              //     return true;
              //   }
              //   return false;
              // })
              .map((pizzaObj) => (
                <Card
                  key={pizzaObj.id}
                  {...pizzaObj}
                  // title={pizzaObj.title}
                  // price={pizzaObj.price}
                  // key={pizzaObj.id}
                  // sizes={pizzaObj.sizes}
                  // types={pizzaObj.types}
                />
              ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;

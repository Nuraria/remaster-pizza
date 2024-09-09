import React from "react";
import Skeleton from "../Cart/Skeleton.jsx";
import Filter from "../Filter/Filter.jsx";
import Card from "../Cart/Card.jsx";
import Pagination from "../Pagination/";
// import ReactPaginate from "react-paginate";
import axios from "axios";
import { AppContext } from "../../App.js";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice.js";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const [categoryId, setCategoryId] = React.useState(0);
  // заменили обычный state на тот что создали в store
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { valueText } = React.useContext(AppContext);
  //https://662be852de35f91de159e148.mockapi.io/
  // const [sortType, setSortType] = React.useState({
  //   namee: "популрности",
  //   sortProperty: "rating",
  // });
  const sort = [
    { namee: "популярности(desc)", sortProperty: "rating" },
    { namee: "популярности(asc)", sortProperty: "-rating" },
    { namee: "по цене(desc)", sortProperty: "price" },
    { namee: "по цене(asc)", sortProperty: "-price" },
    { namee: "по алфавиту(desc)", sortProperty: "title" },
    { namee: "по алфавиту(asc)", sortProperty: "-title" },
  ];
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = sort.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(
        setFilters({
          ...params,
          sortList,
        })
      );
      isSearch.current = true;
    }
  }, []);
  // const [currentPage, setCurrentPage] = React.useState(1);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoading(true);
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const categoryBy = categoryId > 0 ? `category=${categoryId}` : "";
    const search = valueText ? `&search=${valueText}` : " ";
    axios
      .get(
        `https://662be852de35f91de159e148.mockapi.io/pizzas?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((json) => {
        setPizzas(json.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    // setIsLoading(true);
    // fetch(
    //   `https://662be852de35f91de159e148.mockapi.io/pizzas?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setPizzas(json);
    //     setIsLoading(false);
    //     // setTimeout(() => {
    //     //   setPizzas(json);
    //     //   setIsLoading(false);
    //     // }, 1500);
    //   });

    // axios
    //   .get(
    //     `https://662be852de35f91de159e148.mockapi.io/pizzas?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${order}${search}`
    //   )
    //   .then((json) => {
    //     setPizzas(json.data);
    //     setIsLoading(false);
    //   });

    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, valueText, currentPage]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  return (
    <>
      <Filter
        sort={sort}
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;

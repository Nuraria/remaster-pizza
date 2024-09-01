import React from "react";
import Skeleton from "../Cart/Skeleton.jsx";
import Filter from "../Filter/Filter.jsx";
import Card from "../Cart/Card.jsx";

const Home = () => {
  //https://662be852de35f91de159e148.mockapi.io/
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    namee: "популрности",
    sortProperty: "rating",
  });
  const [pizzas, setPizzas] = React.useState([]);

  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const categoryBy = categoryId > 0 ? `category=${categoryId}` : "";
  
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://662be852de35f91de159e148.mockapi.io/pizzas?${categoryBy}&sortBy=${sortBy}&order=${order}`
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
  }, [categoryId, sortType]);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      <Filter
        categoryId={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
        sortType={sortType}
        onClickSort={(i) => setSortType(i)}
      />
      <div className="card_content">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizzaObj) => (
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
    </>
  );
};

export default Home;

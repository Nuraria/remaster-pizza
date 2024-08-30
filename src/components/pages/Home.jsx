import React from "react";
import Skeleton from "../Cart/Skeleton.jsx";
import Filter from "../Filter/Filter.jsx";
import Card from "../Cart/Card.jsx";

const Home = () => {
  //https://662be852de35f91de159e148.mockapi.io/
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch("https://662be852de35f91de159e148.mockapi.io/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTimeout(() => {
          setPizzas(json);
          setIsLoading(false);
        }, 1500);
      });
  }, []);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
        <Filter />
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

import Header from "./components/Header/Header.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Card from "./components/Cart/Card.jsx";

import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />

        <div className="insaid">
          <Filter />
          <div className="card_content">
            {pizzas.map((pizzaObj) => (
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
        </div>
      </div>
    </div>
  );
}

export default App;

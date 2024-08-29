import Header from "./components/Header/Header.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Card from "./components/Cart/Card.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />

        <div className="insaid">
          <Filter />
          <div className="card_content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaBlock } from "./components/PizzaBlock";
import "./scss/app.scss";
import pizzas from "./pizza.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((el) => {
              return (
                <PizzaBlock
                  key={el.id}
                  id={el.id}
                  imageUrl={el.imageUrl}
                  title={el.title}
                  types={el.types}
                  sizes={el.sizes}
                  price={el.price}
                  category={el.category}
                  rating={el.rating}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

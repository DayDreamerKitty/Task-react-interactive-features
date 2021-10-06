import Home from "./components/Home";
// Components
import { useState } from "react";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
//styling
import "./App.css";

function App() {
  const [cookie, setDetails] = useState({
    name: "Chocolate Chip Cookie",
    price: 10,
    description: "The classic!",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
  });

  const [theme, setTheme] = useState("whitetheme");

  return (
    <div className={theme}>
      <Home setTheme={setTheme} theme={theme} />
      <ProductList setDetails={setDetails} />
      <Details cookie={cookie} />
    </div>
  );
}

export default App;

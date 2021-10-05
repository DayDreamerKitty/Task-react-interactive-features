// Components
import ProductItem from "./ProductItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const productList = products
    .filter((product) => product.name.includes(query))
    .map((product) => (
      <ProductItem
        setDetails={props.setDetails}
        product={product}
        key={product.id}
      />
    ));

  return (
    <>
      {console.log(query)}
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;

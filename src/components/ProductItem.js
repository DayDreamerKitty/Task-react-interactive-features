import products from "../products";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper" onClick={() => props.setDetails(product)}>
      <img className="img" alt={product.name} src={product.image} />
      <p className="nameEdit">{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <button className="btn">Remove</button>
    </div>
  );
};

export default ProductItem;

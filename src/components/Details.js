import products from "../products";

export default function Details(props) {
  return (
    <div className="detailEdit">
      <h2>{props.cookie.name}</h2>
      <p>{props.cookie.price} KWD</p>
      <p className="Edit">{props.cookie.description}</p>
      <img className="imageEdit" src={props.cookie.image} />
    </div>
  );
}

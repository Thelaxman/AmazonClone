import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

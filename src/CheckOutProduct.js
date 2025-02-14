import "./checkoutproduct.css";
import { useStateValue } from "./Stateprovider";

function CheckOutProduct({ id, image, title, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removefromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="checkoutItem" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removefromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;

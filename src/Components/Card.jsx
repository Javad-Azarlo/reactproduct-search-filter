import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { quntityProduct, shortenText } from "../setvices/Helper";
import styles from "../Components/Card.module.css";
import { useCard } from "../Context/CardContext";

function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCard();
  const quntity = quntityProduct(state, id);
  console.log(quntity);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.action}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
          <div>
            {quntity === 1 && (
              <button onClick={() => clickHandler("DEL_ITEM")}>
                <MdDeleteOutline />
              </button>
            )}
            {quntity > 1 && (
              <button onClick={() => clickHandler("DECRESE_ITEM")}>-</button>
            )}
            {quntity > 0 && <span>{quntity}</span>}
            {quntity === 0 ? (
              <button onClick={() => clickHandler("ADD_ITEM")}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => clickHandler("INCRESE_ITEM")}>+</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { shortenText } from "../setvices/Helper.js";
import { MdDeleteOutline } from "react-icons/md";
import styles from "../Components/BascketCard.module.css"
function BascketCard({ data , clickHandler }) {
    const {image , title , quntity} = data;
    
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.action}>
        {quntity === 1 && (
          <button onClick={() => clickHandler("DEL_ITEM" , data)}>
            <MdDeleteOutline/>
          </button>
        )}
        {quntity > 1 && (
          <button onClick={() => clickHandler("DECRESE_ITEM" , data)}>-</button>
        )}

        <span>{quntity}</span>
        <button onClick={() => clickHandler("INCRESE_ITEM" , data)}>+</button>
      </div>
    </div>
  );
}

export default BascketCard;

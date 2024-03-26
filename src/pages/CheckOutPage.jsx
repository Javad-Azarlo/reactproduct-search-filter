import React from "react";
import { useCard } from "../Context/CardContext";
import BascketCard from "../Components/BascketCard";
import EmptyBasCket from "../assets/empty-cart.png";
import SideBarBascket from "../Components/SideBarBascket";

import styles from "../pages/CheckOut.module.css";
function CheckOutPage() {
  const [state, dispatch] = useCard();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  console.log(state);
  if (!state.itemCunter)
    return (
      <div>
        <img src={EmptyBasCket} />
      </div>
    );
  return (
    <div className={styles.container}>
      <SideBarBascket state={state} clickHandler={clickHandler} />

      <div className={styles.products}>
        {state.selectedItems.map((item) => (
          <BascketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;

import React from "react";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "../Components/SideBarBascket.module.css";
function SideBarBascket({ state, clickHandler }) {
  console.log(state);

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total : </p>
        <span>{state.itemTotal}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quntity : </p>
        <span>{state.itemCunter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status : </p>
        <span>{!state.checkout && "Pendding"}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>CheckOut</button>
    </div>
  );
}

export default SideBarBascket;

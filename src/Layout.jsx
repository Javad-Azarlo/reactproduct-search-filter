import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCard } from "./Context/CardContext";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCard();
  console.log(state);
  return (
    <>
      <header className={styles.header}>
        <Link>Shopping</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCunter && <span>{state.itemCunter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develoed By Javad Azarlouyeh ❤</p>
      </footer>
    </>
  );
}

export default Layout;

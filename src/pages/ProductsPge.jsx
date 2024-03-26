import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import {
  categProducts,
  searchProducts,
  creatQuery,
  getInitialsQuery,
} from "../setvices/Helper";
import { useSearchParams } from "react-router-dom";
import sideBar from "../Components/SideBar.module.css";
import searchBox from "../Components/SearchBox.module.css";
import { liCateg } from "../Constant/List";
function ProductsPge() {
  const [search, setSearch] = useState("");
  const products = useProducts();
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [serachParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplay(products);
    setQuery(getInitialsQuery(serachParams));
    setSearch(query.search || "");
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let filnalProducts = searchProducts(products, query.search);
    filnalProducts = categProducts(filnalProducts, query.categ);
    setDisplay(filnalProducts);
    // console.log(filnalProducts)
  }, [query]);
  const clickHandlerInput = () => {
    setQuery((query) => creatQuery(query, { search }));
  };
  const categoriesHandler = (e) => {
    const { tagName } = e.target;
    const categ = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => creatQuery(query, { categ }));
  };
  // console.log(query);
  return (
    <>
      <div className={searchBox.search}>
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          value={search}
          type="text"
          placeholder="Search..."
        />
        <button onClick={clickHandlerInput}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!display.length && <Loader />}
          {display.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div className={sideBar.sidebar}>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoriesHandler}>
            {liCateg.map((item) => (
              <li
                key={item.id}
                className={
                  query.categ === item.type.toLowerCase()
                    ? sideBar.selected
                    : null
                }
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPge;

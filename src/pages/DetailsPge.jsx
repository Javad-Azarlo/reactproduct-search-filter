import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../Context/ProductContext";
import Loader from "../Components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import styles from "./DetailsPage.module.css";

function DetailsPge() {
  const { id } = useParams();
  const productDetails = useProductsDetails(+id);

  console.log(productDetails);
  // const{ price , title , image , description , category} = productDetails;
  if (!productDetails) return <Loader />;
  return (
    <>
      <div className={styles.container}>
        <img src={productDetails.image} alt={productDetails.title} />
        <div className={styles.information}>
          <h3 className={styles.title}>{productDetails.title}</h3>
          <p className={styles.description}>{productDetails.description}</p>
          <p className={styles.category}>
            <SiOpenproject />
            {productDetails.category}
          </p>
          <div>
            <span className={styles.price}>
              <IoMdPricetag />ّ{productDetails.price}
            </span>
            <Link to="/products">
              <FaArrowLeft />
              <span>Back To Shop </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPge;

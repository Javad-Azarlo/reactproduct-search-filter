import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../setvices/Config";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
const useProducts = () => {
  const prdct = useContext(ProductContext);
  return prdct;
};
const useProductsDetails = (id) => {
  const products = useContext(ProductContext);
  const resualt = products.find((item) => item.id === id);
  return resualt;
};

export { useProducts, useProductsDetails };
export default ProductProvider;

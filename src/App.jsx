import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPge from "./pages/ProductsPge";
import DetailsPge from "./pages/DetailsPge";
import CheckOutPage from "./pages/CheckOutPage";
import NotFound from "./pages/NotFound";
import ProductProvider from "./Context/ProductContext";
import CardProvider from "./Context/CardContext";
import Layout from "./Layout";
function App() {
  return (
    <CardProvider>
      <Layout>
        <ProductProvider>
          <Routes>
            <Route index element={<Navigate replace to="products" />} />
            <Route path="/products" element={<ProductsPge />} />
            <Route path="/products/:id" element={<DetailsPge />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductProvider>
      </Layout>
    </CardProvider>
  );
}

export default App;

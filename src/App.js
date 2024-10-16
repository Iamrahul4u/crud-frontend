import React, { useEffect, useState } from "react";
import ProductsPage from "./Components/ProductPage";
import AddProduct from "./Components/AddProduct";
import { fetchProducts } from "./utils";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedProduct, setAddedProduct] = useState(false);
  useEffect(() => {
    async function fetchProductsfun() {
      const response = await fetchProducts();
      setProducts(response.data);
    }
    fetchProductsfun();
    setAddedProduct(false);
  }, [addedProduct]);
  function handleAddProduct() {
    setAddedProduct(true);
  }
  return (
    <div>
      <AddProduct handleAddProduct={handleAddProduct} />
      <ProductsPage products={products} />
    </div>
  );
}

export default App;

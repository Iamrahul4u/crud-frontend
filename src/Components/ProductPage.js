import React from "react";
import ProductList from "./ProductList";

const ProductsPage = ({ products }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-semibold">Product Dashboard</h1>
      </header>
      <main className="p-6">
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default ProductsPage;

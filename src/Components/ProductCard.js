import axios from "axios";
import React from "react";

const ProductCard = ({ product }) => {
  async function handleDelete(id) {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        await axios.delete(`${process.env.BACKEND_PORT}/api/products/${id}`);
        alert("Product deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {product.imgUrl && (
        <img
          className="w-full h-48 object-cover"
          src={`https://crud-backend-9io2.onrender.com${product.imgUrl}`}
          alt={product.name}
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-800 font-bold">${product.price}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded"
            onClick={() => handleDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

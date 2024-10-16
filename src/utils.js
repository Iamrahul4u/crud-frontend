import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `https://crud-backend-9io2.onrender.com/api/products`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

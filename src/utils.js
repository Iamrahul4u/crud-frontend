import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_PORT}/api/products`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

import axios from "axios";
import { GET_PRODUCT_BY_CATEGORY_URL } from "../constants/index";

export async function getProductsByCategory(category) {
  let url = `${GET_PRODUCT_BY_CATEGORY_URL}${category}`;

  const request = {
    method: "GET",
    url,
  };
  try {
    const response = await axios(request);
    return {
      products: response.data,
    };
  } catch (e) {
    console.error(e);
    return [];
  }
}

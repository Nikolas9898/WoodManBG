import axios from "axios";
import { GET_PRODUCT_BY_SLUG_URL } from "../constants/index";

export async function getProductBySlug(category) {
  let url = `${GET_PRODUCT_BY_SLUG_URL}${category}`;

  const request = {
    method: "GET",
    url,
  };
  try {
    const response = await axios(request);
    return {
      product: response.data,
    };
  } catch (e) {
    console.error(e);
    return [];
  }
}

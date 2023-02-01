import axios from "axios";
import { BASE_URL } from "../serviceConfig";

export const getData = async (api) => {
  try {
    const response = await axios.get(BASE_URL + api);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
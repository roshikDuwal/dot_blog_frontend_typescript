
import axios from "axios";
import { Base_Url } from "../constants/Base_Url";

export const axiosInstance = axios.create({
  baseURL: Base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});

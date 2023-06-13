import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.BACKEND_API_URL}/api/`,
  headers: {
    Authorization: "",
  },
});

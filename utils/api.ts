import axios from "axios";

export const api = axios.create({
  baseURL: "https://dny4au0opl.execute-api.us-west-2.amazonaws.com",
});

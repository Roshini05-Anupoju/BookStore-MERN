import axios from "axios";

const API = axios.create({
  baseURL: "https://bookstore-mern-38rd.onrender.com/",
});

export default API;
import axios from "axios";

const api = axios.create({
  baseURL: "http://3.88.110.25:3000/?country=bra",
});

export default api;
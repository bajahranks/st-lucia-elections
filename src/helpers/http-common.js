import axios from "axios";

export default axios.create({
  baseURL: "https://nodejs-mongodb-sluelections.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  },
  //withCredentials: true
});
import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerbuilder-f1f12.firebaseio.com/",
});

export default instance;

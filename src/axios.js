import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c9314.cloudfunctions.net/api",
});

export default instance;

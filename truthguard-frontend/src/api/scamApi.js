import axios from "axios";

const API = axios.create({
    baseURL: "https://truthguard-backend-5.onrender.com"
});

export default API;
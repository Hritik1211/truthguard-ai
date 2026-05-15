import axios from "axios";

const API = "http://https://truthguard-backend-5.onrender.com/api/dashboard";

export const getDashboardStats = async () => {

  const response = await axios.get(`${API}/stats`);

  return response.data;

};
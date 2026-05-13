import axios from "axios";

const API = "http://localhost:8080/api/dashboard";

export const getDashboardStats = async () => {

  const response = await axios.get(`${API}/stats`);

  return response.data;

};
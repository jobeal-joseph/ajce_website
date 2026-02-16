import axios from 'axios';

const api = axios.create({
  // This automatically picks up the URL from your .env file
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000" 
});

export default api;
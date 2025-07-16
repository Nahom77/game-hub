import axios from 'axios';

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

// Creating axios instance to use with d/t request methods (get/post/update/delete)
export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: apiKey,
  },
});

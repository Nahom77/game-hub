import axios from 'axios';

// Creating axios instance
export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'd3f6af10bc3d4123b62aa840f61a68f6',
  },
});

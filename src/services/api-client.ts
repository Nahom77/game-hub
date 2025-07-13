import axios from 'axios';

// Creating axios instance to use with d/t request methods (get/post/update/delete)
export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'd3f6af10bc3d4123b62aa840f61a68f6',
  },
});

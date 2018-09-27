import axios from 'axios';

const HOST = process.env.ROOT_HOST || 'http://localhost:8000/api';

export default {
  list() {
    return axios.get(`${HOST}/activities`);
  },
};
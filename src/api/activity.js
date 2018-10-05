import axios from 'axios';

const HOST = process.env.ROOT_HOST || 'http://www.agenda.unjbg.edu.pe/api';

export default {
  list() {
    return axios.get(`${HOST}/activities`);
  },
};
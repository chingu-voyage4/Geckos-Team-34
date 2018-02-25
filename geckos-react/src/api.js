import axios from 'axios';

export default {
  user: {
    login: async(credentials) => {
      const response = await axios.post('/auth/login', { credentials });
      const user = response.data.user;
      return user;
    },
    register: async(data) => {
      const response = await axios.post('/auth/register', data);
      const apiResp = response.data;
      return apiResp;
    },
    confirm: async(token) => {
      const response = await axios.post('/auth/confirmation', { token });
      const apiResp = response.data;
      return apiResp;
    }
  }
};

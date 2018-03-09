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
    },
    resetPassword: async(email) => {
      const response = await axios.post('/auth/password_reset', { email });
      const apiResp = response.data;
      return apiResp;
    },
    validateToken: async(token) => {
      const response = await axios.post('/auth/validate_token', { token });
      const apiResp = response.data;
      return apiResp;
    },
    resetUserPassword: async(data) => {
      const response = await axios.post('/auth/reset_user_password', data);
      const apiResp = response.data;
      return apiResp;
    }
  },
  blog: {
    store: async(data) => {
      const response = await axios.post('/news', data);
      const apiResp = response.data;
      return apiResp;
    },
    index: async(data) => {
      const response = await axios.get('/news', data);
      const apiResp = response.data;
      return apiResp;
    },
    show: async(data) => {
      const response = await axios.get('news/', data);
      const apiResp = response.data;
      return apiResp;
    }
  }
};

import axios from 'axios';

export default {
  user: {
    login: async(credentials) => {
      const response = await axios.post('/auth/login', { credentials });
      const user = response.data.user;
      return user;
    }
  }
};
import axios from 'axios';

export default axios.create({
  baseURL: 'https://xbi-dev.elastoo.com/',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_XBI_TOKEN}`
  }
});

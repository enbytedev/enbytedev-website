import axios from 'axios';
import { ACCESS_URL } from '../App.js';

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

export function accessRequest(username, password, file) {
    const params = new URLSearchParams()
    params.append('file', file)
    params.append('username', username)
    params.append('password', password)

    axios.post(`${ACCESS_URL}`, params, config)
  .then((result) => {
    window.open(`${ACCESS_URL}?t=${result.data}`, '_blank');
  })
  .catch((err) => {
    console.error(err);
  })
}
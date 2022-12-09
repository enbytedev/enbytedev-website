import axios from 'axios';

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

    axios.post(process.env.REACT_APP_ACCESS_URL, params, config)
  .then((result) => {
    window.open(`${process.env.REACT_APP_ACCESS_URL}?t=${result.data}`, '_blank');
  })
  .catch((err) => {
    console.error(err);
  })
}
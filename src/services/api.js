import axios from 'axios'

const api = axios.create({
  baseURL: 'https://onig9.sse.codesandbox.io/',
})

export default api

import axios from 'axios'
import { apiUrl } from '@proffy/dotenv'

const api = axios.create({
  baseURL: apiUrl,
})

export default api

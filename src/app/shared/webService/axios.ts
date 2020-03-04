import axios from 'axios'

export const get = async () => {
  const response = await axios.get('http://localhost:3000/healthcheck')
  return response
}

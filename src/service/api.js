import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tindev-backend-konig.herokuapp.com/'
})

export default api
import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://expro-max.firebaseio.com/',
})

export default instance

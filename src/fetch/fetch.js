import axios from 'axios'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api';

//请求拦截器
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data)
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			// 'Access-Control-Allow-Origin': '*'
		}
		return config
	}
)


//响应拦截
axios.interceptors.response.use((res) => {
  return res
},(error) =>{
  return error
})

export default axios;
import axios from "axios"

// 设置默认地址
axios.defaults.baseURL = 'http://47.114.156.143:3000/mock/11/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.params = {
    //     ...config.params,
    //     appkey:"sss"
    // }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default axios
import axios from "axios"

// 设置默认地址
// axios.defaults.baseURL = 'http://47.114.156.143:9090';
axios.defaults.baseURL = 'http://47.114.156.143:3000/mock/11/'

axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers['Access-Control-Allow-Origin']='*';//允许所有来源访问
// axios.defaults.headers['Access-Control-Allow-Method']='POST,GET';//允许访问的方式
// axios.setHeader("Access-Control-Allow-Origin", "*");
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config,111)
    return config;
  }, function (error) {
    // console.log(error,222)
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default axios
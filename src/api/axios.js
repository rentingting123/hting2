import axios from "axios"
import qs from 'qs';

// 设置默认地址
// const baseURL = 'http://47.114.156.143:9090';
const baseURL = 'http://47.114.156.143:3000/mock/11/'


// 添加请求拦截器

const request = axios.create({
  baseURL,
});

request.interceptors.request.use(function (config) {
  const { method, data } = config;
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data);
  }

    return config;
  }, function (error) {
    
    // 对请求错误做些什么
    if(error.response){
      // console.log(222,error)
      // const { status } = error.response;
      // if(status === 401){
      //   store.dispatch('setToken');
      // } else if(status === 402){
      //   message.error('您的权限不足！');
      // }
    }
    return Promise.reject(error);
  });
export default request
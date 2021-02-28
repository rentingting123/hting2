import axios from "axios"
import qs from 'qs';
// import { Message } from 'ant-design-vue';
// import router from '@/router';
// 设置默认地址
const baseURL = 'http://47.114.156.143:9090';
// const baseURL = 'http://47.114.156.143:3000/mock/11/'


// 添加请求拦截器

const request = axios.create({
  baseURL,
});
//	或者这样设置
// request.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// request.defaults.crossDomain = true;
request.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// request.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

request.interceptors.request.use(function (config) {
  const { method, data } = config;
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data);
  }
    return config;
  }, function (error) {
    return Promise.reject(error);
});
// http response 拦截器
// request.interceptors.response.use(
//     res => {
//       console.log(res,333);
//         if (res.data.code == '4') {
//             // Message.destroy();
//             // Message.error({
//             //     content: res.data.message
//             // });
//             setTimeout(() => {
//                 router.push("/login")
//             }, 400)
//         }
//         if (res.data.code == '-3') {
//             Message.destroy();
//             Message.warning({
//                 content: "您没有该权限,请联系管理员"
//             });
//             // setTimeout(() => {
//             //     router.push("/login")
//             // },400)
//         }
//         if (res.data.code == "1") {
//             return res.data
//         } else {
//             Message.destroy();
//             Message.error({
//                 content: res.data.message,
//             });
//             return res.data
//         }
//     },
//     error => {
//         if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
//             Message.destroy();
//             Message.warning({
//                 content: "请求超时",
//                 duration: 3
//             });
//         }
//         return Promise.reject(error)
//     }
// );
export default request
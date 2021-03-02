import axios from "axios"
import qs from 'qs';
// import { Message } from 'ant-design-vue';
// import router from '@/router';

const request = axios.create();
request.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息

request.interceptors.request.use(function (config) {
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

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function axiosPostQs(url, data) {
  return new Promise((resolve, reject) => {
    request.post('/api' + url, qs.stringify(data))
    .then(response => {
        resolve(response)
    })
    .catch(err => {
        reject(err)
    })
  })
}
export function axiosPost(url, data) {
  return new Promise((resolve, reject) => {
    request.post('/api' + url, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
        resolve(response)
    })
    .catch(err => {
        reject(err)
    })
  })
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function axiosGet(url, params = {}) {
  return new Promise((resolve, reject) => {
      axios.get('/api' + url, {
        params: params
      })
      .then(response => {
          resolve(response)
      })
      .catch(err => {
          reject(err)
      })
  })
}
// delete
export function axiosDelete(url) {
  return new Promise((resolve, reject) => {
    axios.delete('/api' + url)
    .then(response => {
        resolve(response)
    })
    .catch(err => {
        reject(err)
    })
  })
}
// put
export function axiosPut(url, data) {
  return new Promise((resolve, reject) => {
    axios.put('/api' + url, data)
    .then(response => {
        resolve(response)
    })
    .catch(err => {
        reject(err)
    })
  })
}
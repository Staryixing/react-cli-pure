// 接口取消

import render from "./app/render";
import PageError from "./app/PageError";

const statusText = {
  401: "请重新登录",
  403: '没有操作权限',
  404: '请求不存在',
  500: '服务器异常'
}

export default function request (url, option = {}, callback){
  const fetchPromise = fetch(url, options).then(response => response.json())
  let abort;
  const abortPromise = new Promise((resolve, reject) => {
    abort = () => {
      reject(Error('abort'))
    }
  })
  Promise.race([fetchPromise,abortPromise])
    .then(({data})=> {
      callback(data)
    }).catch(() => {})
  return abort
}

// export default function request(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ name: 'XXX' })
//     }, 2000)
//   })
// }

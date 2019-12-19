// 接口超时

import render from "./app/render";
import PageError from "./app/PageError";

const statusText = {
  401: "请重新登录",
  403: '没有操作权限',
  404: '请求不存在',
  500: '服务器异常'
}
export default async function request(url, options = {}, callback){
  const { timeout, ...restOptions } = options;
  try {
    // Promise.race 比较两个异步函数 某个先执行结束
    const response = await Promise.race([
      baseRequest(url, restOptions),
      timeoutFn(timeout)
    ])
    const { status } = response;
    if(status === 200){
      const { success, data, errorMsg } = await response.json()
      if(success){
        callback(data);
        return;
      }
      render(PageError, {children: errorMsg})
    } else {
      render(PageError, { children: statusText[status] });
    } 
    // const { data } = await response.json();
    // console.log(data, 'data')
    // callback(data)
  } catch (error){
    // 两个promise中有一个执行出错时走这个
    // setTimeout中使用reject即报错，走到catch中
    console.log('执行超时')
    render(
      PageError,{
        key:Math.random(),
        onFetch() {
          request(url, {...options, timeout: timeout + 1000}, callback)
        },
        children: "请求超时， 点击重试"
      }
    )
    throw error;
  }
}

// 超时函数
function timeoutFn(ms = 3000){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(Error("timeout"));
      reject() // 报错 catch
      resolve() // 执行正确
    }, ms);
  });
}

// 基础请求函数
async function baseRequest(url, options){
  await new Promise(resolve => setTimeout(resolve, 2000))
  return fetch(url, options)
}

// export default function request(){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ name: 'XXX' })
//     }, 2000)
//   })
// }

import render from "./app/render";
import PageError from "./app/PageError";

const statusText = {
  401: "请重新登录",
  403: '没有操作权限',
  404: '请求不存在',
  500: '服务器异常'
}
export default function request(url, options = {}, callback) {
  callback({ rest: { amount: "10" } }); // 正常返回
  // callback({}); // 异常返回
}
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './app/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
// 待数据加载完成后渲染页面
import render from './app/render';
import request from './request';
import App from './app/App';
import Loading from './app/Loading';

request(
  // "https://cnodejs.org/api/v1/topics",
  // "https://cnodejs.org/api/v1/topicss",
  "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312",
  {
   // timeout: 1000,
  },
  data => {
    render(App, {data})
  }
)

// render(Loading);
// (
//   async () => {
//     const data = await request();
//     render(App, {data})
//   }
// )()



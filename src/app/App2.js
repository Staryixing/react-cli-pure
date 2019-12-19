// import React, { useState, useEffect } from 'react';
// import './App.css';
// import request from '../request';
// import Loading from './Loading';

// function App() {
//   const [data, setData] = useState(null)
//   useEffect(() => {
//     (
//       async () => {
//         const data = await request();
//         setData(data)
//       }
//     )()
//   });
//   // if(!data) return null;

//   return (
//     <div className="App">
//       {
//         data? <h1>Hello { data.name }</h1>:
//         <Loading></Loading>
//       }
//     </div>
//   );
// }
// export default App;

import React from "react";
import './App.css';

export default function App(props){
  const { data } = props;
  return (
    <ul className="App">
      {data.slice(0, 5).map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  )
}

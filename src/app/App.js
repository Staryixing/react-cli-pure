import React,{ useState } from "react";
import './App.css';
import { request } from "http";

function From(){
  const [applying, setApplying] = useState(false)
  const handleSubmit = async() => {
    if(applying) return;
    setApplying(true)
    try{
      await request()
    }catch{
      setApplying(false)
    }
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>
        {applying ? "提交中...": "提交"}
      </button>
    </div>
  )

}

export default function App(props){
  const { data } = props;
  const { rest } = data;
  return (
    <div>
      <strong>余额：</strong>
      <span className="highlight">{rest.amount}元</span>
      <From></From>
    </div>
  )
}

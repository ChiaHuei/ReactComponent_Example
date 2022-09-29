import React, { useState, useEffect } from "react";

const TimerTwo = () => {
  const [state, setState] = useState({
    date: new Date()
  });


  useEffect(() => {
    updateTimer();
  });

  const updateTimer = () => {
    setInterval(() => {
      setState({
        date: new Date()
      });
    }, 1000);
  };

  return <div>現在時間是: {state.date.toLocaleTimeString()}</div>;
};

export default TimerTwo;


// useState 可以當成是在 function component 中 state 和 setState 的集合體。
// 變數型態 [state 變數名稱, setState 函式名稱] = useState ( state 變數初始值 )
// 第一個 state 是變數，等同於在 class component 中的 this.state.date
// 第二個 setState 等同於 (值)=>{this.setState({date:值})}

// useEffect 此方法中需帶入一個函式，此函式於畫面渲染完後被呼叫

// https://ithelp.ithome.com.tw/articles/10220063
// https://ithelp.ithome.com.tw/articles/10239791

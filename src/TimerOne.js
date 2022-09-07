import React, { Component,useEffect } from "react";
import TimerTwo from "./TimerTwo";

class TimerOne extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.updateTimer();
  }
  
  updateTimer() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  
  render() {
    return <div>現在時間是: {this.state.date.toLocaleTimeString()}</div>;
  }
}

export default TimerOne


// 無限的執行:setInterval(func,1000);
// 只會執行一次:setTimeout(func,1000);

// 宣告state物件，內包含一個物件date

// componentDidUpdate()是在state被修改時會執行的函式，所以state每次被修改都會再執行 this.updateTimer()

// state這個變數是read-only的，我們並不能用this.state.變數=值  來直接修改state
// 而是必須要透過React預寫好的函式setState()來更改
// 最後用 render 渲染出來
// toLocaleTimeString()方法，用來取得日期物件中，當地時間的時間部分，轉成字串符。

// https://ithelp.ithome.com.tw/articles/10219561
// https://ithelp.ithome.com.tw/articles/10239791
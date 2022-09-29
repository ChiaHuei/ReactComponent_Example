import React, { Component } from "react";

class TimerOne extends Component {
  // 宣告state物件，內包含一個物件date
  state = {
    date: new Date()
  };


  // componentDidMount() 是在 state 被修改時 ( 當元件要被顯示到 DOM 後) 會執行的函式
  // 所以 state 每次被修改都會再執行 this.updateTimer()
  componentDidMount() {
    this.updateTimer();
  }

  updateTimer() {
    // 無限的執行:setInterval(func,1000);
    // 只會執行一次:setTimeout(func,1000);
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


// state 這個變數是 read-only 的，我們並不能用 this.state.變數 = 值  來直接修改 state
// 而是必須要透過 React 預寫好的函式 setState() 來更改
// 最後用 render 渲染出來
// toLocaleTimeString() 方法，用來取得日期物件中，當地時間的時間部分，轉成字串符。

// https://ithelp.ithome.com.tw/articles/10219561
// https://ithelp.ithome.com.tw/articles/10239791
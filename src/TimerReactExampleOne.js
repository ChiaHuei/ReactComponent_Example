import React from "react";

class TimerReactExampleOne extends React.Component{
// 在 Class 的建構式 ( constructor ) 中，透過 this.state 來定義 state 的內容
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

// 當元件要被顯示到 DOM 後，React 會 call componentDidMount()
    componentDidMount(){
        // 啟動一個 timer，每秒會自動更新時間
        this.test = setInterval(
            () => this.tick(),
            1000
        );
    }

// 當元件要從 DOM 中被移除 (remove) 前
// React 會 call componentWillUnmount()
    componentWillUnmount(){
        clearInterval(this.test);
    }

    tick(){
        // 利用 setState() 來更新資料狀態 ( State )
        // 此方法會將新的物件合併 ( merge ) 進原本的物件，在資料狀態中沒有被更新到的部分，則會保留原有的狀態。
        // 每次呼叫 this.setState() 時，React 會偵測到 State 的更新，自動呼叫 .render()，導致畫面重新轉譯。
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
            <div>It's {this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default TimerReactExampleOne



// 生命週期方法：https://ithelp.ithome.com.tw/articles/10201266
// https://zh-hant.reactjs.org/docs/state-and-lifecycle.html
import React from "react";
import "./styles.css";

// components
import Welcome from "./ClassBasedComponent";
import WelcomeOne from "./FunctionComponentOne";
import WelcomeTwo from "./FunctionComponentTwo";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import Person from "./Person/Person";
import TimerReactExampleOne from "./TimerReactExampleOne";
import UpdateTime from "./UpdateTime";

export default function App() {
  return (
    <div className="App">
      <h1>ReactComponent 基本概念及 State 事件處理</h1>
      <hr size="4" color="blue" ></hr>

      <h3>Class-based component</h3>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <hr />

      <h3>Function component One</h3>
      <WelcomeOne name="Sara" />
      <WelcomeOne name="Kelly" />
      <hr />

      <h3>Function component Two</h3>
      <WelcomeTwo name="Sara">我是 Children!</WelcomeTwo>

      <hr size="4" color="blue" ></hr>

      {/* <h3>Timer(Class-based component)</h3>
      <TimerOne />
      <hr /> */}

      {/* <h3>Timer(Function component)</h3>
      <TimerTwo />
      <hr /> */}
      
      <TimerReactExampleOne />

      <hr size="4" color="blue" ></hr>

      <h3>State 事件處理</h3>
      <Person />
      <hr/>

      <h3>UpdateTime 點擊按鈕更新時間</h3>
      <UpdateTime />

    </div>
  );
}

// 更新 React Element 有幾種方式:
// 1. 每次都重新建立一個新的 React Element，然後透過再次呼叫 ReactDOM.render() 方法更新畫面。
// 2. 透過更新 state 中的資料更新畫面。
// https://ithelp.ithome.com.tw/articles/10239791
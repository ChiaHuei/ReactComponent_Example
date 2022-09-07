import React from "react";

const WelcomeOne = (props) => {
  return <p>Hello, {props.name}</p>;
};

export default WelcomeOne;


// App.js 中的 <WelcomeOne name = "Sara" /> 是我們自定義的元件 (Component)
// 當我們設定一個自定義的屬性 name = "Sara" 時，React 會以 {name:'Sara'} 的方式作為 props 傳入 Component 中
// 所以才能在 function WelcomeOne 中透過 props.name 取得值
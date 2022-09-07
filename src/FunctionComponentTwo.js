import React from "react";

const WelcomeTwo = (props) => {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <p>{props.children}</p>
    </>
  );
};

export default WelcomeTwo;


// children 其中一種使用方式是允許我們在自定義的元件標籤中寫入值
// 如同 App.js 的 Hello World!，而這也同樣會以 {name: 'Sara', children: 'Hello World!'} 作為 props 傳入到元件中。
// 在 react component 中，我們把包在標籤中間的東西，稱為 children。
// children 是 props 之一，所以當使用的 children 改變時，畫面也會重繪。

// https://ithelp.ithome.com.tw/articles/10218605
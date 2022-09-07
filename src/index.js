import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// ReactDOM.render(element, container[, callback])
// element 是我們要準備渲染到 DOM 上的 React Element
// container 則是我們指定要放入的 DOM 節點。
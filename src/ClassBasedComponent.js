import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}

export default Welcome;


// 透過繼承自 React 中的 Component 類別來建立一個 Class Component。
// 在 Welcome Component，透過 props 將 name 值傳給 Welcome。
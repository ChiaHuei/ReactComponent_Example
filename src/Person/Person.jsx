import React from "react";
import "./person.css";

export default class Person extends React.Component {
  state = {
    person: [
      { name: "Bill" , age: "29" } ,
      { name: "Cathy", age: "30"}
    ]
  };

//   // 透過物件的方式進行更新
//   switchNameHandler = () => {
//     this.setState({
//       person: [{ name: "Alex", age: "25" }]
//     });
//   };

// //   透過 updater 的方式更新
//   switchNameHandler = () => {
//     this.setState((state) => {
//       return {
//         person: [{ name: "Alex", age: "25" }]
//       };
//     });
//   };

  // 如果需要在更新元件後做某件事情時
  // 使用 setState(updater, callback) 的方式，callback 會在完成 component 被重新 render 後執行
  switchNameHandler = () => {
    this.setState(
      (state) => {
        return {
          person: [{ name: "Alex", age: "25" }]
        };
      },
      () => {
        console.log(this.state.person);
      }
    );
  };

  render() {
    const { person } = this.state;
    return (
      <div className="person">
        <h1>{person[0].name}</h1>
        <p>Your Age: {person[0].age}</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}


// 掛上一個 onClick 事件，用來觸發 switchNameHandler 函式，此時可以成功取得 switchNameHandler 的值。
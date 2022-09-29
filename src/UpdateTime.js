import React from 'react';

class UpdateTime extends React.Component {
  constructor(props) { 
    // 在建構子設定state的初始值
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
    };
  }

  updateTime = () => { 
    // 宣告updateTime function
    this.setState({ 
    // 利用setState更新state的值
      currentTime: new Date().toLocaleString(),
    });
  }

  render() {
    const { currentTime } = this.state;
    return (　
      <div>
        <div>{currentTime}</div>
        <button type="button" onClick={this.updateTime}>update</button>
      </div>
    );
  }
}

export default UpdateTime;

// https://ithelp.ithome.com.tw/articles/10200798
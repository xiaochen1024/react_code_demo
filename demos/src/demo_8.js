import React from "react";

export default class App extends React.Component {
  state = {
    count: 0,
  };
  click = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
    });
  };
  render() {
    console.log("render");
    return <p onClick={this.click}>{this.state.count}</p>;
  }
}

import React, { useEffect, useState, useRef, Component, createRef } from "react";
import { render } from "react-dom";

export default class App extends React.Component {
  buttonRef = createRef(null);
  state = {
    count: 0,
  };

  onClick = () => {
    this.setState({
      count: this.state.count + 2,
    });
  };

  componentDidMount() {
    const button = this.buttonRef.current;
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 2000);
    setTimeout(() => button.click(), 2040);
  }

  render() {
    return (
      <div>
        <button ref={this.buttonRef} onClick={this.onClick}>
          plus + 2
        </button>
        <div>
          {Array.from(new Array(4000)).map((v, index) => (
            <span key={index}>{this.state.count}</span>
          ))}
        </div>
      </div>
    );
  }
}

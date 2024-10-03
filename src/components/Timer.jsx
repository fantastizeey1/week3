import React, { Component } from "react";

class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="p-4 bg-green-200 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Timer</h2>
        <p className="text-xl">Elapsed Time: {this.state.seconds}s</p>
      </div>
    );
  }
}

export default Timer;

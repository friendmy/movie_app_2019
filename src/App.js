import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: this.state.count - 1 }));
  };
  componentDidMount() {
    console.log("Component Did Monunt");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

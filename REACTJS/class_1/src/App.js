import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fatherNme: "Majid Khan",
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>INC</button>

        <b className="marginLeftRight">{this.state.count}</b>

        <button onClick={this.onChangeName}>DEC</button>

        <Child name={this.state.fatherNme} />
      </div>
    );
  }
}



class Child extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi {this.props.name} </h1>
      </div>
    );
  }
}

// const Greeting = (props) => {
//   const abc = "fsdfs"
//   return (
//     <div>
//       <h1>Hello {props.fatherNme.text}</h1>
//     </div>
//   )
// }



export default Parent;

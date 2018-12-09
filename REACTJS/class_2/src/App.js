import React, { Component } from 'react';
import './App.css';
import { LoginComponent } from './components/login';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // increment = () => {
  //   this.setState({ count: ++this.state.count });
  // }

  render() {
    return (
      <div className="App">
        <LoginComponent labels={{ mail: "Email", pass: "Password", btn: "Login", placeholder: "*******" }} />
      </div>
    );
  }
}



// class Child extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> Hi {this.props.name} </h1>
//       </div>
//     );
//   }
// }

// const Greeting = (props) => {
//   const abc = "fsdfs"
//   return (
//     <div>
//       <h1>Hello {props.fatherNme.text}</h1>
//     </div>
//   )
// }



export default Parent;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
        gender: ''
    };
  }

  handleVal(event){
    this.setState({gender: event.target.value});
  }

  render() {
    const user = {
      name: "zhangsan",
      hobbies: ["football", "swimming"]
    }
    return (
      <div>
        <Header/>
        <div>用户性别: {this.state.gender}</div>
        <Home name={"lisi"} initAge={23} user={user} handleGender={this.handleVal.bind(this)}>
          <p1>"home's children"</p1>
        </Home>
        {"APP"}
      </div>
    );
  }
}

export default App;

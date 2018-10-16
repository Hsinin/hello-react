import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user = {
      name: "zhangsan",
      hobbies: ["football", "swimming"]
    }
    return (
      <div>
        <Header/>
        <Home name={"lisi"} age={23} user={user}>
          <p1>"home's children"</p1>
        </Home>
        {"APP"}
      </div>
    );
  }
}

export default App;

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
        <Home name={"lisi"} initAge={23} user={user} gender={"男"}>
          <p1>"home's children"</p1>
        </Home>
        {"APP"}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initAge
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
        console.log(this);
    }
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                  <div>your name is {this.props.name},your age is {this.state.age},your gender is {this.props.gender}</div>
                  <button onClick={() => this.onMakeOlder()}>MakeMeOlder</button>
                  <h3>hobbies:</h3>
                  <ul>
                      {/* {this.props.user.hobbies.map((hobby)=><li>{hobby}</li>)} */}
                      {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                  </ul>
                  {this.props.children}
                  <div>用户性别(Home): <input onChange={this.props.handleGender}/></div>
                  

                </div>
              </div>
            </div>
          );
    }
  
};

export default Home;

Home.propTypes  = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};
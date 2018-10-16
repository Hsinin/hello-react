import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                  <div>your name is {this.props.name},your age is {this.props.age}</div>
                  <h3>hobbies:</h3>
                  <ul>
                      {/* {this.props.user.hobbies.map((hobby)=><li>{hobby}</li>)} */}
                      {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                  </ul>
                  {this.props.children}
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
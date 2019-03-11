import React, { Component } from 'react';

class Body extends Component {
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                  <div>"Body"</div>
                  <div>用户性别(Body): {this.props.gender}</div>
                </div>
              </div>
            </div>
          );
    }
  
};

export default Body;

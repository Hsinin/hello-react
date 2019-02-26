import React from 'react';

// class Header extends Component {
//     render(){
//         return (
//             <div className="container">
//               <div className="row">
//                 <div className="col-xs-1 col-xs-offset-11">
//                   <div>"Header"</div>
//                 </div>
//               </div>
//             </div>
//           );
//     }
  
// };

//无状态组件写法
const Header = (prpos) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <div>"Header"</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

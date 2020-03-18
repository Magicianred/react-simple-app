// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Jumbotron from 'react-bootstrap/Jumbotron';

// /**
//  * Component for showing the Who Are page.
//  * 
//  * @component
//  * @example
//  * return (
//  *   <About />
//  * )
//  */
// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             match: props.match
//         };
//     }

//     render() {
//         let { match } = this.state;
//         return (
//             <div className="page">
//                 <Jumbotron className="page about">
//                     <h2>About Us</h2>
//                     <p>This is the about us page</p>
//                 </Jumbotron>
//                 <Switch>
//                     <Route path={`${match.path}/whoare`}>
//                         <Topic />
//                     </Route>
//                     <Route path={`${match.path}/whereare`}>
//                         <Topic />
//                     </Route>
//                 </Switch>
//             </div>
//         );
//     }
// }

// export default About;
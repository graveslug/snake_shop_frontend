// import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
// import axios from "axios";

// import NavBar from "../NavBar/NavBar.js";
// import SnakeList from "../SnakeList/SnakeList.js";
// import SignUpForm from "../SignUpForm/SignUpForm.js"
// import LogInForm from "../LogInForm/LogInForm.js";
// import LogOutForm from "../LogOutForm/LogOutForm.js"
// import "./App.css"

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             email: "",
//             passowrd: "",
//             isLoggedIn: false,
//         };

//         this.handleLogOut = this.handleLogOut.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleLogIn = this.handleLogIn.bind(this);
//         this.handleSignUp = this.handleSignUp.bind(this);
//     }

//     componentDidMount() {
//         if (localStorage.token) {
//             this.setState({
//                 isLoggedIn: true,
//             });
//         } else {
//             this.setState({
//                 isLoggedIn: false,
//             });
//         }
//     }

//     handleLogOut() { }

//     handleInput(e) {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     };

//     handleSignUp(e) { }

//     handeLogIn(e) { }

//     render() {
//         return (
//             <div>
//                 <NavBar isLoggedIn={this.state.isLoggedIn} />
//                 <div className="body">
//                     <Switch>
//                         <Route path="/signup" render={(props) => {
//                             return (
//                                 <SignUpForm isLoggedIn={this.state.isLoggedIn}
//                                     handleInput={this.handleInput}
//                                     handleSignUp={this.handleSignUp}
//                                 />
//                             );
//                         }}
//                         />
//                         <Route
//                             path="/logout"
//                             render={(props) => {
//                                 return (
//                                     <LogOut
//                                         isLoggedIn={this.state.isLoggedIn}
//                                         handleLogOut={this.handleLogOut}
//                                     />
//                                 );
//                             }}
//                         />
//                         <Route
//                             path="/login"
//                             render={(props) => {
//                                 return (
//                                     <LogInForm
//                                         isLoggedIn={this.state.isLoggedIn}
//                                         handleInput={this.handleInput}
//                                         handleLogIn={this.handleLogIn}
//                                     />
//                                 );
//                             }}
//                         />
//                         <Route path="/"
//                             render={() => {
//                                 return <SnakeList isLoggedIn={this.state.isLoggedIn} />;
//                             }}
//                         />
//                     </Switch>
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;
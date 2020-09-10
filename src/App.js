import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar/NavBar.js';
import SnakeList from './components/SnakeList/SnakeList.js';
import SnakeShow from './components/SnakeShow/SnakeShow.js';
import SignUpForm from "./components/SignUpForm/SignUpForm.js";
import LogInForm from "./components/LogInForm/LogInForm.js";
import LogOutForm from "./components/LogOutForm/LogOut.js";
import SnakeSubmit from "./components/SnakeSubmit/SnakeSubmit"
import "./App.css";
import About from './components/About/About.js';


const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://hissery-backend.herokuapp.com/users/signup", {
        email: state.email,
        password: state.password,
      });
      console.log(response);
      localStorage.token = await response.data.token;
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://hissery-backend.herokuapp.com/users/login", {
        email: state.email,
        password: state.password,
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOutForm isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/snakesubmit"
            render={(props) => {
              return (
                 <SnakeSubmit
                 />
                )
              }}
            />
          <Route
            path="/about"
            render={(props)=>{
              return (
                <About
               />
              )
            }}
          />
          <Route
            path="/snakelist/show"
            render={() => {
              return (<SnakeShow
              />
             )
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <SnakeList isLoggedIn={isLoggedIn}
               />
              )
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;

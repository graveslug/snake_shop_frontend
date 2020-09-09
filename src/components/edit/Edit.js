import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../NavBar/NavBar.js';
import SnakeList from '../SnakeList/SnakeList.js';
import SignUpForm from "../SignUpForm/SignUpForm.js";
import LogInForm from "../LogInForm/LogInForm.js";
import LogOutForm from "../LogOutForm/LogOut.js";

const Edit = () => {
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

    const handleLogOut = () => { };

    const handleInput = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSignUp = (event) => { };

    const handleLogIn = (event) => { };

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="body">
                <Switch>
                    <Route path="/signup" render={(props) => {
                        return (
                            <SignUpForm isLoggedIn={isLoggedIn}
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
                        path="/"
                        render={() => {
                            return <SnakeList isLoggedIn={isLoggedIn} />;
                        }}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default Edit;
import React from 'react';
import { Link } from "react-router-dom";
import "./LogInForm.css"

function LogInForm(props) {
    return(
        <div className="LogIn">
            <br/>
            <br/>
        <div className="signUp">
        <h2 class="title">Log In</h2>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={props.handleInput}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={props.handleInput}/>
            </div><br/>
            <input value="Submit" type="submit" onClick={props.handleLogIn}/>
        </form>
        </div>
        </div>
    );
}

export default LogInForm;

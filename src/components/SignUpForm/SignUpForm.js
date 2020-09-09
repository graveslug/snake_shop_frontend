import React from 'react';

import "./SignUpForm.css";

function SignUpForm(props) {
    return (
        <div>
            <br />
            <br />
            <div className="signUp">
                <h2 className="title">Sign Up</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={props.handleInput} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={props.handleInput} />
                    </div><br />
                    <input value="Submit" type="submit" onClick={props.handleSignUp} />
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;

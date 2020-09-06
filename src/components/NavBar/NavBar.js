//NOT COMPLETE, just a general basis, more to be added when final design is approved by all group members

import React from 'react';
import "./NavBar.css"

function NavBar(props) {
    let navBarItems = [
        <li key={1}>
            <a href="#">About</a>
        </li>
    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <li key={2}>
                <a href="/logout">Log Out</a>
            </li>
        );
    } else {
        navBarItems.push(
            <li key={3}>
                <a href="/signup">Register</a>
            </li>
        );
        navBarItems.push(
            <li key={4}>
                <a href="/login">Log In</a>
            </li>
        );
    }
    return (
        <>
        <nav>
            <ul className="NavBar">{navBarItems}</ul>
        </nav>
        <h1>The Hissery</h1>
        </>
    );
}

export default NavBar;
//NOT COMPLETE, just a general basis, more to be added when final design is approved by all group members

import React from 'react';
import "./NavBar.css"

function NavBar(props) {
    let navBarItems = [
        <>
        <li key={1}>
        <a className="menu" href="/landing">Home</a> 
        </li>
        <a>|</a>
        <li key={2}>
            <a className="menu" href="/about">About</a> 
        </li>
        <a>|</a>
        <li key={3}>
            <a className="menu" href="/snakelist">Available</a> 
        </li>
        </>
    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <>
            <a>|</a>
            <li key={4}>
                <a className="menu" href="/logout">Log Out</a>
            </li>
            </>
        );
    } else {
        navBarItems.push(
            <>
            <a>|</a>
            <li key={5}>
                <a className="menu" href="/signup">Register</a>
            </li>
            </>
        );
        navBarItems.push(
            <>
            <a>|</a>
            <li key={6}>
                <a className="menu" href="/login">Sign In</a>
            </li>
            </>
        );
    }
    return (
        <div className="Nav">
        <nav>
            <ul className="NavBar"> {navBarItems} 
            </ul>
        </nav>

{/* Background work below */}
        {/* <ul class="cb-slideshow">
	<li>
		<span>Image 01</span>
		<div>
			<h3>Species info here??</h3>
		</div>
	</li>
	<li></li>
	<li></li>
</ul> */}

        </div>
    );
}

export default NavBar;

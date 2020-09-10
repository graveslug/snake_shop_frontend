import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import { render } from '@testing-library/react';



function Landing(props) {
    return ( 
        <div className="Landing">
            <NavBar></NavBar>
        </div>
    )
}
export default Landing

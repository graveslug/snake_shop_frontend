import React from 'react'
import { Link } from 'react-router-dom'

function Landing(props) {
    render() {
        <div>
            <h4>
                <span>Landing Page</span>
            </h4>
            //file path for register
            <Link
                To='/register'
                >
                Register
            </link>
            //file path for login
            <link
                To='/login'
                >
                Log In
                </link>
        </div>
    }
}
export default Landing

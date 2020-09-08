import React from 'react';
import "./About.css"


function About (props){
        return(
            <div className="background">
                <div>
                    <h2 className="title">About Us</h2>
                    <p>
                        Welcome to Hissery. We are a group of classmates deciding to give you the best experience with look and reserving snakes out there. Philip Gray, Lillian Parker, and Isaac Dennis hope you enjoy this webpage and get a snake of your dreams.
                    </p>
                </div>
                <div>
                    <h2 className="title">About Website</h2>
                    <p>
                        Here on Hissery, we provide high quality snakes where you can breed particular snakes to your liking. Through our reservation system you can reserve the snake(s). We have a wide variety of snakes to choose from. 
                    </p>
                </div>
                <h2>Contact Us </h2>
                <div className="allContacts">
                    <div className="section">
                    <h3  className="contact">Philip Gray</h3>
                    <p>Email: philip.gray@email.com</p>
                    </div><br/>
                    <div className="section">
                    <h3  className="contact">Isaac Dennis</h3>
                    <p>Email: isaac.dennis@email.com</p>
                    </div><br/>
                    <div className="section">
                    <h3  className="contact">Lillian Parker</h3>
                    <p>Email: lillian.parker@email.com</p>
                    </div>
                </div>
            </div>
        )
    }


export default About
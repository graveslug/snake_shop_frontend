import React from 'react';
import "./About.css"


function About (props){
        return(
            <div className="About">
                <br/><br/><br/><br/>
                <img className="aboutImg" src="https://i.imgur.com/Wn6qdBz.png" align="right"/>
                <div className="aboutContainer">
                    <h2 className="aboutTitle">About The Hissery</h2>
                    <p  className="paragraph1">
                        Welcome to the Hissery, a breeding facility that specializes in a wide array of Colubrids, Viperids, and Elapids. Please, look through our extensive collection. We pride ourselves on quality and healthy animals, and uphold our honor of excellence in customer service. If you have any questions, then one of our associates below can assist you.
                    </p>
                </div>
                <div>
                    <h2 className="aboutTitle">About The Developers</h2>
                    <p className="paragraph2">
                        The Hissery was created by three students involved in a Software Engineer Immersive Program and is in no way, shape, or form a legitimate Snake Breeding Facility.
                    </p>
                </div>
                <h2 className="contactTitle">Contact Us </h2><br/><br/>
                <div className="allContacts">
                    <div className="section">
                    <h3  className="contact">Philip Gray</h3>
                    <a className="link" href="mailto:philip.gray@email.com">Email Me</a>
                    </div><br/>
                    <div className="section">
                    <h3  className="contact">Isaac Dennis</h3>
                    <a className="link" href="mailto:isaac.dennis@email.com">Email Me</a>
                    </div><br/>
                    <div className="section">
                    <h3  className="contact">Lillian Parker</h3>
                    <a className="link" href="mailto:lillian.parker@email.com">Email Me</a>
                    </div>
                </div>
            </div>
        )
    }

    export default About
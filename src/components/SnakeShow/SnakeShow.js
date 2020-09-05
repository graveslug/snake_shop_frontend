import React from 'react';
import './SnakeShow.css';

function SnakeShow(props) {
    const { image, species, venomous, morph, sex, age, proven, origin, quote, description } = props.snake;
    return (
        <div className="snake-preview">
            {props.isLoggedIn ? 
            <div>
            <img src={image} className="snakeImage"/>
            <h3>Species{species}</h3>
            <h5>Venomous: {venomous}</h5>
            <h5>Morph: {morph}</h5>
            <h5>Sex: {sex}</h5>
            <h5>Age: {age}</h5>
            <h5>Proven: {proven}</h5>
            <h5>Origin: {origin}</h5>
            <h5>{quote}</h5>
            <p>Description: {description}</p>
            </div>
             : "We apologize, but you must be signed in to view this add, please sign in"}
        </div>
    );
}

export default SnakeShow;
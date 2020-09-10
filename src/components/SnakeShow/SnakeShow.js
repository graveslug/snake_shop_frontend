import React, { useState, useEffect } from 'react';
import './SnakeShow.css';

function SnakeShow(props) {
    const [snakes, setSnakes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/' + props.match.params.id);
                const data = await response.json();
                data ? await setSnakes(data) : setSnakes({});
            } catch (e) {
                console.log(e)
            }
        })();
    }, []);

    const handleDelete = async event => {
		event.preventDefault();
		try {
			const response = await fetch('/api/' + props.match.params.id, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			await setSnakes({});
		} catch (e) {
			console.error(e);
		}
	};
    // const { image, species, venomous, morph, sex, age, proven, origin, quote, description } = props.snake;
    return (
        <div className="SnakeShow">
        <h1>Hi this is the show page</h1>
            {/* <img src={image} className="snakeImage"/>
            <h3>Species{species}</h3>
            <h5>Venomous: {venomous}</h5>
            <h5>Morph: {morph}</h5>
            <h5>Sex: {sex}</h5>
            <h5>Age: {age}</h5>
            <h5>Proven: {proven}</h5>
            <h5>Origin: {origin}</h5>
            <h5>{quote}</h5>
            <p>Description: {description}</p> */}
        </div>
    );
}

export default SnakeShow;
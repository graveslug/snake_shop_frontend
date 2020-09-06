import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SnakeShow from "../SnakeShow/SnakeShow";

const SnakeList = (props) => {
    const [snakes, setSnakes] = useState([]);

    useEffect(() => {
        ( async () => {
            try {
                const response = await fetch('/api');
                const data = await response.json();
                setSnakes([...data]);
            } catch (e) {
                console.log(e)
            }
        })();
    }, []);

const showSnake = snakes.map((snake, i) => {
    return (
        <div key={i}>
            <SnakeShow snake={snake} isLoggedIn={props.isLoggedIn}/>
        </div>
    );
});
    return <div>{showSnake}</div>
};

export default SnakeList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./SnakeList.css"
import SnakeShow from "../SnakeShow/SnakeShow";

const SnakeList = (props) => {
    const [snakes, setSnakes] = useState([]);

    useEffect(() => {
        (async () => {
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
                <SnakeShow snake={snake} isLoggedIn={props.isLoggedIn} />
            </div>
        );
    });
    return (
        <div className="SnakeList">
            <a href="/snakesubmit" className="addSnakeButton"><img className="addSnake" src="https://i.imgur.com/jFlads4.png"/></a><br/>
            <div className="grid">
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://i.pinimg.com/originals/51/68/be/5168be6d6eeb3db280b2c1d9fc85d9eb.jpg" />
                        <div className="card__content">
                            <h1 className="card__header">Male Sunbeam Snake</h1>
                            <p className="card__text">Proven, 4 year old, CB male Sunbeam Snake. Tolerates handling and feeds like a champ. Would do great in a breeding program</p><Link><button className="card__btn">More Information<span>&rarr;</span></button></Link>
                        </div>
                    </div>
                </div>
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://i.pinimg.com/originals/1a/57/88/1a57889947889a50f7652a8982bec5cc.jpg" alt="Desert" />
                        <div className="card__content">
                            <h1 className="card__header">Pair of California Garter Snakes</h1>
                            <p className="card__text">Proven pair of California Red-Sided Garter Snakes. Great indivudals, have given me several clutches perfect clutches. Female is a bit snappy but male is very personable.</p>
                            <button className="card__btn">More Information<span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://i.pinimg.com/originals/c0/6c/98/c06c988fab6079da2b1fbaf8401bd6c5.jpg"  />
                        <div className="card__content">
                            <h1 className="card__header">Eastern Female Indigo</h1>
                            <p className="card__text">Amazing CB female, two years old, see her being a great breeder. She's the resident trashcan and has that classic indigo attitude.</p><button className="card__btn">More Information<span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SnakeList;
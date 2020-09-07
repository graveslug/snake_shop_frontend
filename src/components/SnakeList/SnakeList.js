import React, { useState, useEffect } from 'react';
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
        <div>
            <h1>Snakes be showin</h1>
            <div className="grid">
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://i.pinimg.com/originals/51/68/be/5168be6d6eeb3db280b2c1d9fc85d9eb.jpg" />
                        <div className="card__content">
                            <h1 className="card__header">Male Sunbeam Snake</h1>
                            <p className="card__text">Proven, 4 year old, CB male Sunbeam Snake. Tolerates handling and feeds like a champ. Would do great in a breeding program</p><button className="card__btn">More Information<span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://i.pinimg.com/originals/1a/57/88/1a57889947889a50f7652a8982bec5cc.jpg" alt="Desert" />
                        <div className="card__content">
                            <h1 className="card__header">Pair of California Garter Snakes</h1>
                            <p className="card__text">Proven pair of California Red-Sided Garter Snakes. Great indivudals, have given me several clutches.</p><button className="card__btn">More Information<span>&rarr;</span></button>
                        </div>
                    </div>
                </div>
                <div className="grid__item">
                    <div className="card"><img className="card__img" src="https://lh3.googleusercontent.com/proxy/F_p7Ujzef8in4CnpFhnytHiibDDlMH1Pk4rFRyK2n64q73OkjO-YeYwCOw3Z7t1ZJt3P6KwH3SvSEOhQFYeH55umxy5MNfMLvh4" alt="Canyons" />
                        <div className="card__content">
                            <h1 className="card__header">Eastern Female Indigo</h1>
                            <p className="card__text">Amazing CB female, two years old, see her being a great breeder. She's the resident trashcan and has that classic indigo attitude.</p><button className="card__btn">More Information<span>&rarr;</span></button>
                        </div>
                    </div>
                    <div>{showSnake}</div>
                </div>
            </div>
        </div>
    )
};

export default SnakeList;
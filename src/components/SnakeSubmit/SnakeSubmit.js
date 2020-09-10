import React, { useState, useEffect, } from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios'


function SnakeSubmit(props) {
    const history = useHistory()
    const [snakeState, setSnakeState] = useState({
        image: "",
        species: "",
        venomous: "",
        morph: "",
        sex: "",
        age: "",
        prooven: "",
        origin: "",
        quote: "",
        description: ""
    });

    const handleSnakeInput = (event) => {
      setSnakeState({ ...snakeState, [event.target.name]: event.target.value });
    };

    const handleSnakeSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:3001/snakes", {
          image: snakeState.image,
          species: snakeState.species,
          venomous: snakeState.venomous,
          morph: snakeState.morph,
          sex: snakeState.sex,
          age: snakeState.age,
          prooven: snakeState.prooven,
          origin: snakeState.origin,
          quote: snakeState.quote,
          description: snakeState.description
        });
        console.log(response);
        history.push("/")
      } catch (err) {
        console.log(err);
      }
    };
    return(
        <div className="SnakeSubmit">
            <h2>Submit Snake</h2>
            <form className="snakeSubmit">
                <div>
                    <label htmlFor="image">
                        Image:
                    </label>
                    <input type="text" name="image" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="species">
                        Species:
                    </label>
                    <input type="text" name="species" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="venomous">
                        Venomous:
                    </label>
                    <input type="checkbox" name="venomous" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="morph">
                        Morph:
                    </label>
                    <input type="text" name="morph" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="sex">
                        Sex:
                    </label>
                    <input type="text" name="sex" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="age">
                        Age:
                    </label>
                    <input type="text" name="age" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="proven">
                        Proven:
                    </label>
                    <input type="checkbox" name="proven" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="origin">
                        Origin:
                    </label>
                    <input type="text" name="origin" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="quote">
                        Quote:
                    </label>
                    <input type="text" name="quote" onChange={handleSnakeInput}/>
                </div>
                <div>
                    <label htmlFor="description">
                        Description:
                    </label>
                    <input type="text" name="description" onChange={handleSnakeInput}/>
                </div><br/>
                <input value="Submit" type="submit" onClick={handleSnakeSubmit}/>
            </form>
        </div>
    );
}

export default SnakeSubmit;

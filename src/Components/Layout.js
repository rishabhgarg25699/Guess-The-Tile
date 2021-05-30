import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css'

const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const FrontPage = () => {
    const [selectedNumber, setSelectedNumber] = useState(0);

    const clickedNumber = (id) => {
        setSelectedNumber(id+1);
    }
    return (
        <>
            <div className="head">
                <div className = "row">
                    {row1.map((num, index) => (
                        <button className="block" key = {index} onClick = {() => clickedNumber(index)}>{num}</button>
                    ))}
                </div>
                <div className = "rules">
                    <p className = "subHeading">🔘 Rules of the Game 🔘</p>
                    <ol className = "list">
                        <li>You have to select a number between 1 to 9</li>
                        <li>Then, there will be 9 tiles on next page</li>
                        <li>You have 3 chances to guess the number in the tile</li>
                        <li>If in the 3 chances you guess the number correct, you win the match</li>
                        <li>Else you loss the number</li>
                    </ol>
                </div>
            </div>
            
            <div className="gameParaStyle">
                <div className="numberStyle">
                    😃 You selected {selectedNumber === 0 ? "No" : selectedNumber} number. Click Submit to Start the Game 😃
                </div>
                <div className = "submit">
                <Link to={{ pathname: `/GamePage/${selectedNumber}`}}> 
                    Submit
                </Link>
                </div>
            </div>
        </>
    )
}

export default FrontPage;

import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import './style.css'

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const NumberSelect = () => {
    let arr = [{1: 0}, {2: 0}, {3: 0}, {4: 0}, {5: 0}, {6: 0}, {7: 0}, {8: 0}, {9: 0}];
    arr = useRef(shuffleArray(arr))
    const count = useRef(0);
    const [isWon, setisWon] = useState(0);
    let {id} = useParams();
    const [number, setNumber] = useState(arr.current);
    console.log(arr.current);

    const clickedNumber = (value) => {
        if(isWon === 0)
        {
            count.current++;
            let newArray = [...number];
            newArray[value.index][value.first] = 1; 
            setNumber(newArray);
            if(count.current >= 3)
                setisWon(2);
            if(value.first === id)
                setisWon(1);
        }
    }
    return (
        <>
            <div className="head">
                <div className = "row">
                    {number.map((val, index) => {
                        let first = Object.keys(val)[0];
                        let second = val[Object.keys(val)[0]];
                        return <button className="block" key = {index} onClick = {() => clickedNumber({first, index})}>{second ? first : ''}</button>
                    })}
                </div>
                <div className="rules">
                <p className = "gameStyle">🔘 Game Started 🔘</p>
                <p className = "subHeadingStyle">
                    <p>  🟤 Your Choosen Number: {id} </p>
                    <p>  🟤 You Have {3 - count.current} Left For Guesssing The Number </p>
                    <p> 🟤 Want To Start New Game </p>
                    <Link to={{ pathname: `/`}}> 
                        New Game 
                    </Link>
                    <p>{isWon === 1 ? <div> 🟤 Congratulations!! You Won 🙂 </div>: isWon === 2 ? <div> 🟤 You Lose 😞. Please Try Again </div> : ""}</p>
                    <br></br>
                    <div>
                        
                    </div>
                </p>

                </div>
            </div>
        </>
    )

}

export default NumberSelect;
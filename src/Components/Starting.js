import React from 'react';
import { Route, Switch } from "react-router-dom";
import GamePage from './GamePage';
import FrontPage from './FrontPage'
import './style.css'

const Starting = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <FrontPage/>} />
                <Route exact path="/GamePage/:id" component={() => <GamePage/>} />
            </Switch>
        </>
    )
}

export default Starting;
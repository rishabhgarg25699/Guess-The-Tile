import React from 'react';
import { Route, Switch } from "react-router-dom";
import GamePage from './GamePage';
import Layout from './Layout'
import './style.css'

const Starting = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <Layout/>} />
                <Route exact path="/GamePage/:id" component={() => <GamePage/>} />
            </Switch>
        </>
    )
}

export default Starting;
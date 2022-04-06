import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';
import HomePage from 'pages/home';
import TeamPage from 'pages/team';
import SneakersPage from 'pages/sneakers';
import 'scss/main.scss';
import 'animate.css';
import BeforeMint from 'pages/mint/before-mint';
import MintOpen from 'pages/mint/mint-open';

import { initWeb3 } from './web3';
import ShowVideo from 'components/commons/modal/show-video';
import ShowHelp from 'components/commons/modal/show-help';
initWeb3();

const App = () => {
    return (
        <Router>
            <ShowVideo />
            <ShowHelp />

            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route exact path="/home">
                    <HomePage />
                </Route>

                <Route exact path="/team">
                    <TeamPage />
                </Route>

                <Route exact path="/gravity">
                    <SneakersPage />
                </Route>

                <Route exact path="/mint">
                    <BeforeMint />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

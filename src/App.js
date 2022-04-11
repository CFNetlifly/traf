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

import { CelesteProvider } from 'celeste-framework';

import { initCeleste } from 'celeste-framework/dist/store-module';

import celesteOptions from 'components/celeste/celeste-options';

import ShowVideo from 'components/commons/modal/show-video';
import ShowHelp from 'components/commons/modal/show-help';
import MintOpen from 'pages/mint/mint-open';

initCeleste(celesteOptions);

const App = () => {
    return (
        <CelesteProvider>
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

                    {/* <Route exact path="/mint-open">
                        <MintOpen />
                    </Route> */}
                </Switch>
                <Footer />
            </Router>
        </CelesteProvider>
    );
};

export default App;

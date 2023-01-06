import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';
import HomePage from 'pages/home';
// import TeamPage from 'pages/team';
import SneakersPage from 'pages/sneakers';
import 'scss/main.scss';
import 'animate.css';

import { ReactNotifications } from 'react-notifications-component';
import { custom_notification_types } from 'static/notifications';
import 'react-notifications-component/dist/theme.css';

import { CelesteStoreProvider, CelesteProvider } from '@celestejs/react';
import CelesteJS from '@celestejs/core';
import celesteConfig from 'celeste.config';

import ShowVideo from 'components/commons/modal/show-video';
import ShowHelp from 'components/commons/modal/show-help';

const celeste = new CelesteJS(celesteConfig);

const App = () => {
    return (
        <CelesteStoreProvider>
            <CelesteProvider celeste={celeste}>
                <Router>
                    <ReactNotifications types={custom_notification_types} />
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

                        {/* <Route exact path="/team">
                        <TeamPage />
                    </Route> */}

                        {/* <Route exact path="/gravity">
                            <SneakersPage />
                        </Route> */}

                        {/* <Route exact path="/mint">
                        <BeforeMint />
                    </Route>
                    <Route exact path="/test/mint">
                        <MintOpen />
                    </Route> */}
                    </Switch>
                    <Footer />
                </Router>
            </CelesteProvider>
        </CelesteStoreProvider>
    );
};

export default App;

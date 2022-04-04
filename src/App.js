import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import HomePage from 'pages/home';
import TeamPage from 'pages/team';
import FaqPage from 'pages/faq';
import Stream from 'pages/stream';
import SocketPage from 'pages/verify-user';
import SneakersPage from 'pages/sneakers';
import DawPage from 'pages/daw';

import 'scss/main.scss';

import { initWeb3 } from './web3';
import MintSection from 'pages/home/mint-section';
import Mint2Section from 'pages/home/mint2-section';
import BeforeMint from 'pages/mint/before-mint';
initWeb3();

const App = () => {
    return (
        <Router>
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

                <Route exact path="/stream">
                    <Stream />
                </Route>

                <Route exact path="/verify/:id">
                    <SocketPage />
                </Route>

                <Route exact path="/gravity">
                    <SneakersPage />
                </Route>

                <Route exact path="/before-mint">
                    <BeforeMint />
                </Route>

                {/* <Route exact path="/mint">
                    <MintSection />
                </Route>

                <Route exact path="/before-mint">
                    <Mint2Section />
                </Route>

                <Route exact path="/sockets">
                    <SocketPage />
                </Route> */}

                {/* <Route exact path="/daw">
                    <DawPage/>
                </Route> */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect, useState } from 'react';
import { ConnectedWrapper, ConnectButton, DisconnectButton, useCelesteSelector } from '@celestejs/react';
import { providers } from '@celestejs/core/dist/constants';

import { logo } from 'images';

// import ConnectButton from 'components/connect-btn';

import { Link } from 'react-router-dom';

// import { useSpring, animated } from 'react-spring';
import { opensea } from 'images';

import './navbar.scss';

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const Navbar = props => {
    const { walletReducer } = useCelesteSelector(state => state);

    const [scroll, setScroll] = useState(0);
    // const styles = useSpring({ background: scroll > 100 ? '#3A3A3A' : 'black' });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    const onBurgerClicked = e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    };

    const onBurgerIClicked = () => {
        // e.preventDefault();
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('is-active');
        const navbarBurger = document.getElementById('navbar-burger');
        navbarBurger.classList.toggle('is-active');
    };

    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
            style={{ background: '#3A3A3A' }}
        >
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/home" className="navbar-item">
                        <img src={logo} alt="" width="32" />
                    </Link>

                    <a
                        href="#"
                        id="navbar-burger"
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar"
                        onClick={onBurgerClicked}
                    >
                        <span aria-hidden="true" style={{ backgroundColor: 'white' }}></span>
                        <span aria-hidden="true" style={{ backgroundColor: 'white' }}></span>
                        <span aria-hidden="true" style={{ backgroundColor: 'white' }}></span>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start">
                        <Link
                            to="/home"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Home
                        </Link>

                        {/* <Link
                            to="/team"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Team
                        </Link> */}

                        <a
                            href="https://traf-1.gitbook.io/traf-whitepaper/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Whitepaper
                        </a>

                        <Link
                            to="/gravity"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Gravity
                        </Link>
                        {/* <Link
                            to="/mint"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Mint
                        </Link> */}
                        <a
                            href="https://staking.theredapefamily.com/staking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="has-text-white navbar-item has-text-centered"
                            onClick={e => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Stake
                        </a>
                    </div>
                    <ConnectedWrapper>
                        <div
                            className="column is-flex is-justify-content-center is-flex-direction-column is-size-7 is-align-items-center navbar-item has-text-centered"
                            id="connection"
                        >
                            <p className="has-text-white ">Connected as</p>
                            <p className="has-text-cyellow has-text-weight-bold">
                                {walletReducer.address && getAddressReduced(walletReducer.address)}
                            </p>
                        </div>
                    </ConnectedWrapper>

                    <div className="navbar-end">
                        <div className="navbar-item has-text-centered">
                            <a
                                className="is-size-4 "
                                href="https://twitter.com/TheRedApeFamily"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered">
                            <a
                                className="is-size-4 "
                                href="https://www.instagram.com/theredapefamily/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered">
                            <a
                                className="is-size-4 "
                                href="https://www.youtube.com/c/TheRedApeFamily"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-youtube"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered">
                            <a
                                className="is-size-4 "
                                href="https://discord.gg/traf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-discord"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered">
                            <a
                                className="is-size-4 "
                                href="https://opensea.io/collection/theredapefamily"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <img src={opensea} alt="" />
                                </span>
                            </a>
                        </div>

                        <div className="navbar-item has-text-centered">
                            <ConnectedWrapper
                                disconnectedComponent={
                                    <div className="navbar-item">
                                        <ConnectButton
                                            className="connect-btn button is-small is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-5 pr-5"
                                            onErrorCB={console.log}
                                            providerType={providers.INJECTED}
                                        >
                                            <span>Connect</span>
                                        </ConnectButton>
                                    </div>
                                }
                            >
                                <div className="navbar-item">
                                    <DisconnectButton
                                        className="navbar-button connect-btn button is-small is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-5 pr-5"
                                        onErrorCB={console.log}
                                    >
                                        <span>Logout</span>
                                    </DisconnectButton>
                                </div>
                            </ConnectedWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

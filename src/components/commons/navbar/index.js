import React from 'react';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { logo } from 'images';

import ConnectButton from 'components/connect-btn';

import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

import { connect } from 'react-redux';
import { set_section } from 'redux/actions/navbarActions';
import { opensea } from 'images';

import './navbar.scss';

const Navbar = (props) => {
    const [scroll, setScroll] = useState(0);
    const styles = useSpring({ background: scroll > 100 ? '#3A3A3A' : 'black' });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    const onBurgerClicked = (e) => {
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
        <animated.nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={styles}>
            <div className="container">
                <div className="navbar-brand">
                    <Link
                        to="/home"
                        className="navbar-item"
                        onClick={() => {
                            props.set_section('HOME');
                        }}
                    >
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
                            className="has-text-white navbar-item has-text-centered-mobile"
                            onClick={(e) => {
                                props.set_section('HOME');
                                onBurgerIClicked(e);
                            }}
                        >
                            Home
                        </Link>

                        {/*}<Link to="/faq" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {onBurgerIClicked(e)}}>
                        FAQ
                    </Link>*/}

                        {/* <Link to="/home" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("ROADMAP"); onBurgerIClicked(e)}}>
                        Roadmap
                    </Link> */}

                        <Link
                            to="/team"
                            className="has-text-white navbar-item has-text-centered-mobile"
                            onClick={(e) => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Team
                        </Link>

                        <a
                            href="https://whitepaper.theredapefamily.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="has-text-white navbar-item has-text-centered-mobile"
                            onClick={(e) => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Whitepaper
                        </a>

                        {/* <Link to="/stream" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Stream
                    </Link> */}

                        <Link
                            to="/gravity"
                            className="has-text-white navbar-item has-text-centered-mobile"
                            onClick={(e) => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Gravity
                        </Link>
                        <Link
                            to="/mint"
                            className="has-text-white navbar-item has-text-centered-mobile"
                            onClick={(e) => {
                                onBurgerIClicked(e);
                            }}
                        >
                            Mint
                        </Link>
                        {/* 
                    <Link to="/daw" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Daw
                    </Link> */}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-text-centered-mobile">
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
                        <div className="navbar-item has-text-centered-mobile">
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
                        <div className="navbar-item has-text-centered-mobile">
                            <a
                                className="is-size-4 "
                                href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-youtube"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered-mobile">
                            <a
                                className="is-size-4 "
                                href="https://discord.gg/JeqSUsVQQC"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onBurgerIClicked}
                            >
                                <span className="icon has-text-white">
                                    <i className="fab fa-discord"></i>
                                </span>
                            </a>
                        </div>
                        <div className="navbar-item has-text-centered-mobile">
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

                        <div className="navbar-item has-text-centered-mobile">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>
        </animated.nav>
    );
};

Navbar.propTypes = {
    set_section: PropTypes.func.isRequired,
};

export default connect(null, {
    set_section,
})(Navbar);

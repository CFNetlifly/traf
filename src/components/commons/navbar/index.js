import { useEffect, useState } from 'react';

import {
    logo
} from 'images';

import ConnectButton from 'components/connect-btn';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {set_section} from 'redux/actions/navbarActions';
import {opensea} from 'images';

import './navbar.scss';

const Navbar = props => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    const onBurgerClicked= e => {
        e.preventDefault();

        const target = e.currentTarget.dataset.target;
        const $target = document.getElementById(target);
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    const onBurgerIClicked = e => {
        // e.preventDefault();
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle('is-active');
        const navbarBurger = document.getElementById("navbar-burger");
        navbarBurger.classList.toggle('is-active');
    }


    return(
        <nav className={`navbar is-fixed-top ${scroll > 100 ? 'navbar-grey' : 'has-background-black'}`} role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/home" className="navbar-item" onClick={e => {props.set_section("HOME")}}>
                      <img src={logo} alt="" width="32" />
                    </Link>

                    <a  id="navbar-burger" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar" onClick={onBurgerClicked}>
                      <span aria-hidden="true" style={{backgroundColor: 'white'}}></span>
                      <span aria-hidden="true" style={{backgroundColor: 'white'}}></span>
                      <span aria-hidden="true" style={{backgroundColor: 'white'}}></span>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/home" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("HOME"); onBurgerIClicked(e)}}>
                        Home
                    </Link>

                    {/*}<Link to="/faq" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {onBurgerIClicked(e)}}>
                        FAQ
                    </Link>*/}

                    <Link to="/home" className="has-text-white navbar-item has-text-centered-mobile" onClick={e => {props.set_section("ROADMAP"); onBurgerIClicked(e)}}>
                        Roadmap
                    </Link>

                    <Link to="/team" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Team
                    </Link>

                    <a href="https://whitepaper.theredapefamily.com/" target="_blank" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Whitepaper
                    </a>

                    <Link to="/stream" className="has-text-white navbar-item has-text-centered-mobile" onClick={ e => {onBurgerIClicked(e)}}>
                        Stream
                    </Link>


                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-text-centered-mobile">
                        <a className="is-size-4 " href="https://twitter.com/TheRedApeFamily" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white" >
                                <i className="fab fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-item has-text-centered-mobile">
                        <a className="is-size-4 " href="https://www.instagram.com/theredapefamily/" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white" >
                                <i className="fab fa-instagram"></i>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-item has-text-centered-mobile">
                        <a className="is-size-4 " href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i className="fab fa-youtube"></i>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-item has-text-centered-mobile">
                        <a className="is-size-4 " href="https://discord.gg/HxE754wj9r" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <i className="fab fa-discord"></i>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-item has-text-centered-mobile">
                        <a className="is-size-4 " href="https://opensea.io/collection/theredapefamily" target="_blank" onClick={onBurgerIClicked}>
                            <span className="icon has-text-white">
                                <img src={opensea} alt=""/>
                            </span>
                        </a>
                    </div>


                    <div className="navbar-item has-text-centered-mobile">
                        <ConnectButton/>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default connect(
    null,
    {
        set_section
    }
)(Navbar);

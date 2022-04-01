import React, { useEffect, useState } from 'react';

import { baseURL } from 'images';
import SectionLayout from 'layouts/section';

import { opensea } from 'images';
import goldLogo from 'media/sneakers/gravity-gold-logo.png';

import faqData from './faq-data';

import sneakersData from './skeakers-data';

import { useSelector } from 'react-redux';

import { connect } from 'react-redux';
import {
    request_change_network,
    check_connected_to_operating_network,
    request_connection,
} from 'redux/actions/walletActions';

const SneakersPage = props => {
    const { web3Reducer, walletReducer } = useSelector(state => state);

    const [triggerer, setTriggerer] = useState(0);

    const [foundationClaimables, setFoundationClaimables] = useState(0);
    const [normalClaimables, setNormalClaimables] = useState(0);

    useEffect(() => {
        props.check_connected_to_operating_network();
    }, [walletReducer.networkId]);

    useEffect(() => {
        getWebData();
    }, [web3Reducer, walletReducer, triggerer]);

    const getWebData = async () => {
        if (
            walletReducer.currentAccount === '' ||
            !web3Reducer.initialized ||
            !walletReducer.connectedToOperatingNetwork
        )
            return;

        const sneakersContract_f = web3Reducer.contracts[`SNEAKERS_F`];
        const sneakersContract = web3Reducer.contracts[`SNEAKERS_N`];
        const traf_testnet = web3Reducer.contracts[`ERC_CONTRACT`];

        /* *~~*~~*~~*~~*~~*~~*~~* FOUNDATION EDITION *~~*~~*~~*~~*~~*~~*~~* */
        let claims = await sneakersContract_f.methods.mints(walletReducer.currentAccount).call();

        let balance = (await traf_testnet.methods.balanceOf(walletReducer.currentAccount, 0).call()) / 2;
        balance = Math.floor(balance);
        balance += (await traf_testnet.methods.balanceOf(walletReducer.currentAccount, 1).call()) / 2;
        balance = Math.floor(balance);

        if (balance < claims) claims = balance;

        setFoundationClaimables(claims);

        /* *~~*~~*~~*~~*~~*~~*~~* NORMAL EDITION *~~*~~*~~*~~*~~*~~*~~* */
        let claims_n = await sneakersContract.methods.mints(walletReducer.currentAccount).call();

        let balance_n = await traf_testnet.methods.balanceOf(walletReducer.currentAccount, 0).call();
        balance_n += await traf_testnet.methods.balanceOf(walletReducer.currentAccount, 1).call();

        if (balance_n < claims_n) claims_n = balance_n;

        setNormalClaimables(claims_n);
    };

    const onFoundationClaimClicked = async () => {
        const sneakersContract = web3Reducer.contracts[`SNEAKERS_F`];

        const tx = await sneakersContract.methods.mint();

        try {
            await tx.send({
                from: walletReducer.currentAccount,
                gas: 100000,
            });
        } catch (e) {
            console.log(e);
        } finally {
            setTriggerer(triggerer + 1);
        }
    };

    const onNormalClaimClicked = async () => {
        const sneakersContract = web3Reducer.contracts[`SNEAKERS_N`];

        const tx = await sneakersContract.methods.mint();

        try {
            await tx.send({
                from: walletReducer.currentAccount,
            });
        } catch (e) {
            console.log(e);
        } finally {
            setTriggerer(triggerer + 1);
        }
    };

    return (
        <div>
            <section className="banner " style={{ minHeight: '100vh', position: 'relative' }}>
                <div
                    className="columns has-background-black is-marginless has-bottom-border-hbrown"
                    style={{ minHeight: 'inherit' }}
                >
                    <div className="column is-flex is-flex-direction-column p-0" style={{ minHeight: 'inherit' }}>
                        <video autoPlay loop muted>
                            <source src={baseURL + '1D9271Uiy0cTgxZpc_bQ8JLOb3YH2KEmq'} type="video/mp4" />
                        </video>

                        <div
                            className="has-background-hbrown is-flex-grow-1 py-6"
                            style={{ display: 'grid', placeItems: 'center' }}
                        >
                            <div className="has-text-centered has-background-dangaer">
                                {props.wallet.currentAccount ? (
                                    props.wallet.connectedToOperatingNetwork ? (
                                        <div className="columns has-background-daark">
                                            <div className="column">
                                                <h1 className="has-text-white has-text-weight-bold">Founder edition</h1>
                                                <br />
                                                {foundationClaimables > 0 ? (
                                                    <div>
                                                        <button
                                                            className="button has-background-transparent has-border-3-cyellow-o-10 has-text-cyellow"
                                                            onClick={onFoundationClaimClicked}
                                                        >
                                                            CLAIM NOW
                                                        </button>
                                                        <br />
                                                    </div>
                                                ) : (
                                                    <h1 className="has-text-white has-text-weight-bold">
                                                        Your wallet doesn't own any foundation claimable
                                                    </h1>
                                                )}
                                                <br />
                                                <h1 className="has-text-white">{foundationClaimables} claimable(s)</h1>
                                            </div>
                                            <div className="column">
                                                <h1 className="has-text-white has-text-weight-bold">Normal edition</h1>
                                                <br />
                                                {normalClaimables > 0 ? (
                                                    <div>
                                                        <button
                                                            className="button has-background-transparent has-border-3-cyellow-o-10 has-text-cyellow"
                                                            onClick={onNormalClaimClicked}
                                                        >
                                                            CLAIM NOW
                                                        </button>
                                                        <br />
                                                    </div>
                                                ) : (
                                                    <h1 className="has-text-white has-text-weight-bold">
                                                        Your wallet doesn't own any normal claimable
                                                    </h1>
                                                )}
                                                <br />
                                                <h1 className="has-text-white">{normalClaimables} claimable(s)</h1>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            className="button is-cyellow"
                                            onClick={e => props.request_change_network(1)}
                                        >
                                            Switch to ETH Mainnet
                                        </button>
                                    )
                                ) : (
                                    <button
                                        type="button"
                                        className="button is-cyellow"
                                        onClick={async e => await props.request_connection()}
                                    >
                                        Connect wallet
                                    </button>
                                )}
                                <br />
                                <h1 className="has-text-white has-text-weight-bold">Founders edition</h1>
                                <br />
                                {/* <h1 className="has-text-white has-text-weight-bold">You can claim {claimables} Gravity Sneakers</h1> */}
                                <br />
                                <h1 className="has-text-white">Free + Gas / MetaMask only</h1>
                                <br />
                                <h1 className="has-text-warning">HOW TO CLAIM YOUR SNEAKERS FROM YOUR SMARTPHONE</h1>
                            </div>
                        </div>
                    </div>
                    <div className="column px-3 ">
                        <div className="has-background-black has-text-centered">
                            <div className="container px-2">
                                <br />
                                <br />
                                <br />

                                <img src={goldLogo} alt="Gravity Gold Logo" style={{ width: '200px' }} />

                                <hr className="has-background-hbrown" style={{ width: '250px', margin: '40px auto' }} />

                                <h1 className="title has-text-hgold is-4">
                                    GRAVITY SNEAKERS
                                    <br />
                                    BY THE RED APE FAMILY
                                </h1>
                                <br />
                                <h1 className="subtitle has-text-hbrown">Mars Wearable</h1>

                                <hr className="has-background-hgold" style={{ width: '250px', margin: '40px auto' }} />

                                <p className="subtitle has-text-centered has-text-hgold has-text-weight-bold">
                                    Designed as a futuristic hi-top basketball shoe, <br />
                                    the Gravity Sneaker counteracts the difference in <br />
                                    gravity on the red planet and stops wearers from <br />
                                    floating away to certain death.
                                </p>

                                <p className="subtitle has-text-hgold has-text-weight-bold">
                                    There are only 333 sneakers out there, and 1 TRAF founders’ edition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* sneakers section */}
            <SectionLayout
                className="has-background-black"
                content={
                    <div>
                        <div className="columns">
                            {sneakersData.map((sneaker, index) => (
                                <div className="column" key={index}>
                                    <figure className="image is-square has-border-2-hbrown-o-10">
                                        <video autoPlay loop muted src={sneaker.src}></video>
                                    </figure>
                                    <br />
                                    <h1 className="title has-text-white has-text-centered is-4">{sneaker.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />

            {/* faq section */}
            <SectionLayout
                className="has-background-black"
                content={
                    <div className="">
                        <h1 className="title has-text-white is-4 has-text-centered">HOW DOES IT WORK?</h1>
                        <br />
                        <br />
                        <ul>
                            {faqData.map((item, i) => (
                                <details
                                    style={{
                                        borderBottom: '3px solid rgba(255, 255, 255, 0.2)',
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                    }}
                                    key={i}
                                >
                                    <summary className="has-text-cyellow is-size-5 has-text-weight-bold pr-5">
                                        {item.question}
                                    </summary>
                                    <p className="has-text-white">
                                        <item.answer />
                                    </p>
                                </details>
                            ))}
                        </ul>
                    </div>
                }
            />

            {/* BUY ON OPENSEA */}
            <SectionLayout
                className="has-background-black"
                content={
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title has-text-white is-3 has-text-centered">BUY FROM OPENSEA</h1>
                            <br />
                            <br />
                            <p className="title has-text-white is-4 has-text-centered">
                                The Gravity Sneakers were made available for our Episode 1 token holders only!
                            </p>
                            <p className="title has-text-white is-4 has-text-centered">
                                If you want to snag one, you can get it now on OpenSea!
                            </p>
                            <br />
                            <br />
                            <div className="has-text-centered">
                                <a href="https://opensea.io/assets/gravity-sneakers" target="_blank">
                                    <figure className="image is-64x64 is-inline-block">
                                        <img src={opensea} alt="" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <video
                                playsInline
                                autoPlay
                                muted
                                loop
                                controls
                                src={baseURL + '11gzuadsJOrAPhmAd6x2PqcYG1_yIARxD'}
                            ></video>
                        </div>
                    </div>
                }
            />

            <SectionLayout
                className="has-background-black p-0 m-0"
                content={<hr style={{ margin: '0', background: '#393939' }} />}
            />

            <SectionLayout
                className="has-background-black"
                content={
                    <div className="has-text-centered">
                        <h1 className="title has-text-warning is-4">MUSKVILLE IS WAITING!</h1>
                        <h1 className="title has-text-white is-3">Get your ticket to Mars and Join our Discord!</h1>
                        <br />
                        <a
                            href="https://discord.gg/HxE754wj9r"
                            target="_blank"
                            className="button is-cpurple has-text-white is-size-4 is-rounded has-font-audiowide"
                            style={{ width: '200px' }}
                        >
                            <strong>HOP ON!</strong>
                        </a>
                        <br />
                    </div>
                }
            />

            <SectionLayout
                className="has-background-black p-0 m-0"
                content={<hr style={{ margin: '0', background: '#393939' }} />}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer,
});

export default connect(mapStateToProps, {
    request_change_network,
    check_connected_to_operating_network,
    request_connection,
})(SneakersPage);

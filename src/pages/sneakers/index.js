import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { baseURL, mainHeel } from 'images';
import SectionLayout from 'layouts/section';

import { opensea } from 'images';
import goldLogo from 'media/sneakers/gravity-gold-logo.png';

import faqData from './faq-data';

import sneakersData from './skeakers-data';

import { set_heels_request, set_heels_success, set_heels_failed } from '../../redux/actions/heelsActions';

import { Store as NotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'static/notifications';

import {
    useCelesteSelector,
    ConnectButton,
    ConnectedWrapper,
    SwitchNetworkButton,
    NetworkWrapper,
} from 'celeste-framework';

import { GravityHeelsProxy } from 'patterns/proxy/mint-functions';

const SneakersPage = () => {
    const dispatch = useDispatch();

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const { heelsReducer } = useSelector(state => state);
    const [amountOfHeels, setAmountOfHeels] = useState(0);

    const checkHeels = async () => {
        const { address } = walletReducer;
        const heels = GravityHeelsProxy();

        const amountOfHeels = await heels.Get_Heels_Data(address);

        return amountOfHeels;
    };

    const claimHeels = async () => {
        const { address } = walletReducer;
        const heels = GravityHeelsProxy();

        try {
            dispatch(set_heels_request());
            await heels.Claim({
                from: address,
            });
            dispatch(set_heels_success());
            setAmountOfHeels(0);
            NotificationsStore.addNotification(
                successNotification('Claimed', 'You have successfully claimed your heels.')
            );
        } catch (e) {
            dispatch(set_heels_failed(e));
            NotificationsStore.addNotification(errorNotification('Error', 'There was an error claiming your heels.'));
        }
    };

    useEffect(() => {
        (async () => {
            if (!web3Reducer.initialized || walletReducer.address === null) return;
            try {
                const amountOfHeels = await checkHeels();
                setAmountOfHeels(amountOfHeels);
            } catch (e) {
                console.log(e);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [walletReducer.address, web3Reducer.initialized]);

    return (
        <div>
            <section className="banner" style={{ minHeight: '100vh', position: 'relative' }}>
                <div
                    className="columns has-background-black is-marginless has-bottom-border-hbrown"
                    style={{ minHeight: 'inherit' }}
                >
                    <div className="column is-flex is-flex-direction-column p-0" style={{ minHeight: 'inherit' }}>
                        <video autoPlay loop muted>
                            <source src={mainHeel} type="video/mp4" />
                        </video>

                        <div className="is-flex is-align-items-center has-background-hbrown is-flex-grow-1 py-6">
                            <div className="container">
                                <div className="columns is-centered">
                                    <div className="column is-narrow has-text-centered">
                                        <h1 className="title has-text-white">Founders edition</h1>
                                    </div>
                                </div>
                                <ConnectedWrapper
                                    disconnectedComponent={
                                        <div className="columns is-centered">
                                            <div className="column is-4 has-text-centered">
                                                <ConnectButton className="button is-cyellow is-fullwidth">
                                                    <span className="icon">
                                                        <i className="fas fa-plug" />
                                                    </span>
                                                    <span>Connect</span>
                                                </ConnectButton>
                                            </div>
                                        </div>
                                    }
                                >
                                    <NetworkWrapper
                                        chainIds={[4]}
                                        info={
                                            <div className="columns is-centered">
                                                <div className="column is-4 has-text-centered">
                                                    <SwitchNetworkButton
                                                        className="button is-fullwidth is-cyellow"
                                                        chainId={4}
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-exchange" />
                                                        </span>
                                                        <span>Switch Network</span>
                                                    </SwitchNetworkButton>
                                                </div>
                                            </div>
                                        }
                                    >
                                        <div className="columns is-centered">
                                            <div className="column has-text-centered">
                                                {amountOfHeels > 0 ? (
                                                    <div>
                                                        <h2 className="subtitle has-text-white">
                                                            You have {amountOfHeels} heels to claim
                                                        </h2>
                                                        <div className="columns is-centered">
                                                            <div className="column is-4">
                                                                <button
                                                                    className={`button ${
                                                                        heelsReducer.loading ? 'is-loading' : ''
                                                                    } is-cyellow is-fullwidth`}
                                                                    onClick={claimHeels}
                                                                >
                                                                    Claim
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <h2 className="subtitle has-text-white">
                                                            You have no heels to claim
                                                        </h2>
                                                        <div className="columns is-centered">
                                                            <div className="column is-4">
                                                                <button
                                                                    className="button is-cyellow is-fullwidth"
                                                                    disabled
                                                                >
                                                                    Claim
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </NetworkWrapper>
                                </ConnectedWrapper>
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
                                    GRAVITY HEELS
                                    <br />
                                    BY THE RED APE FAMILY
                                </h1>
                                <br />
                                <h1 className="subtitle has-text-hbrown">Mars Wearable</h1>

                                <hr className="has-background-hgold" style={{ width: '250px', margin: '40px auto' }} />

                                <div className="columns is-centered">
                                    <div className="column is-8">
                                        <p className="subtitle has-text-centered has-text-hgold has-text-weight-bold">
                                            Designed as a futuristic heel, the Gravity Heels counteracts the difference
                                            in gravity on the red planet and stops wearers from floating away to certain
                                            death.
                                        </p>
                                    </div>
                                </div>

                                <p className="subtitle has-text-hgold has-text-weight-bold">
                                    There are only 333 heels out there, 1 TRAF founders' edition, and 1 DAW edition.
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
                                    <figure className="image has-border-2-hbrown-o-10">
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
                                <a
                                    href="https://opensea.io/assets/gravity-sneakers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
                            rel="noopener noreferrer"
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

export default SneakersPage;

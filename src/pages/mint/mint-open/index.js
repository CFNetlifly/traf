/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import MintSection from './mint-section';

import { useDispatch } from 'react-redux';
import { open_modal } from 'redux/actions/modalActions';

const MintOpen = () => {
    const dispatch = useDispatch();

    return (
        <section className="section has-text-centered has-background-section-4">
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <div className="content">
                        <h1 className="title has-text-centered has-text-white">EPISODE 3 MINT</h1>
                        <h2 className="subtitle has-text-centered is-italic has-text-hlime">MINT IS NOW OPEN</h2>
                    </div>
                </div>
            </div>
            <MintSection />
            <div className="columns pt-3">
                <div className="column">
                    <p className="is-size-4 has-text-white has-text-weight-bold">EPISODE 3 NFTs Left: 1111</p>
                    <p className="has-text-white">
                        TRAF Holders Mint (0.25 ETH + Gas) / Allow List Mint (0.35 ETH + Gas) / Public Mint (0.4 ETH +
                        Gas)
                    </p>
                    <div className="pt-3">
                        <a
                            className="has-text-hdarkyellow has-text-weight-bold "
                            onClick={() =>
                                dispatch(
                                    open_modal({
                                        modalName: 'showVideoModal',
                                    })
                                )
                            }
                        >
                            HOW TO MINT FROM YOUR SMARTPHONE
                        </a>
                    </div>
                    <div className="pt-1">
                        <a
                            className="has-text-yellow has-text-weight-bold "
                            onClick={() =>
                                dispatch(
                                    open_modal({
                                        modalName: 'showHelpModal',
                                    })
                                )
                            }
                        >
                            MORE INFO
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MintOpen;

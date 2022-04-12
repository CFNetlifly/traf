import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    ConnectedWrapper,
    ConnectButton,
    SwitchNetworkButton,
    NetworkWrapper,
    useCelesteSelector,
} from 'celeste-framework';

import { traf, wlPartners, nonWlPartners } from 'patterns/singleton/mint-functions';

const MintSection = () => {
    const [nftLeft, setNftLeft] = useState(0);
    const [balanceOfTRAF, setBalanceOfTRAF] = useState(0);
    const [balanceOfWLPartners, setBalanceOfWLPartners] = useState(0);
    const [balanceOfNonWLPartners, setBalanaceOfNonWLPartners] = useState(0);

    const { mintButtonReducer } = useSelector(state => state);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const res = await traf().getMints(walletReducer.address);
                const trafBalance = await traf().balanceOf(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 30 ~ trafBalance', trafBalance);
                const wlPartnersBalance = await wlPartners().balanceOf(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 32 ~ wlPartnersBalance', wlPartnersBalance);
                const nonWlPartnersBalance = await nonWlPartners().balanceOf(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 34 ~ nonWlPartnersBalance', nonWlPartnersBalance);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [web3Reducer.initialized, walletReducer.address]);

    const incrementButton = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrementButton = () => {
        if (mintButtonReducer.count > 0) {
            dispatch({ type: 'DECREMENT' });
        }
    };

    return (
        <ConnectedWrapper
            disconnectedComponent={
                <div className="columns is-centered">
                    <div className="column ">
                        <ConnectButton className=" button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6">
                            <span>CONNECT</span>
                        </ConnectButton>
                    </div>
                </div>
            }
        >
            <NetworkWrapper
                chainIds={[4]}
                info={
                    <div className="columns is-centered">
                        <div className="column">
                            <SwitchNetworkButton
                                chainId={4}
                                className="button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6"
                            >
                                <span>SWITCH TO MAINNET</span>
                            </SwitchNetworkButton>
                        </div>
                    </div>
                }
            >
                <div className="columns is-centered is-flex">
                    <div className="column is-narrow">
                        <button
                            className="button is-medium is-borderless is-cyellow responsive-btn"
                            style={{ borderRadius: '1000px' }}
                            onClick={decrementButton}
                            disabled={mintButtonReducer.count === 0}
                        >
                            <span className="icon">
                                <i className="fas fa-minus"></i>
                            </span>
                        </button>
                    </div>
                    <div className="column is-2">
                        <button
                            className="button is-medium is-rounded is-borderless is-cyellow is-fullwidth responsive-btn"
                            disabled={mintButtonReducer.count === 0}
                        >
                            <span className="has-text-weight-bold">
                                MINT <span className="has-text-primary">{mintButtonReducer.count}</span> NFTs
                            </span>
                        </button>
                    </div>
                    <div className="column is-narrow">
                        <button
                            className="button is-medium is-borderless is-cyellow responsive-btn"
                            style={{ borderRadius: '1000px' }}
                            onClick={incrementButton}
                            disabled={mintButtonReducer.count === nftLeft}
                        >
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="columns is-centered is-flex">
                    <div className="column is-narrow">
                        <h2 className="is-size-4 has-text-white has-text-weight-bold">
                            Remaining Amount To Mint: <span className="has-text-cyellow">{nftLeft}</span>
                        </h2>
                    </div>
                </div>{' '}
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintSection;

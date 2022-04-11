import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    ConnectedWrapper,
    ConnectButton,
    SwitchNetworkButton,
    NetworkWrapper,
    useCelesteSelector,
} from 'celeste-framework';

import { totalSupply } from 'redux/actions/mint3Actions';

const MintSection = () => {
    const { mintButtonReducer } = useSelector(state => state);
    const { web3Reducer } = useCelesteSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 16 ~ MintSection ~ web3Reducer', web3Reducer);
    const { contracts } = web3Reducer;
    const { traf } = contracts;
    const dispatch = useDispatch();

    // if (traf !== undefined) {
    //     console.log(
    //         '🚀 ~ file: index.js ~ line 28 ~ traf',
    //         traf.methods.totalSupply().call(function (err, res) {
    //             if (err) {
    //                 console.log('🚀 ~ file: index.js ~ line 29 ~ err', err);
    //             }
    //             console.log('🚀 ~ file: index.js ~ line 30 ~ res', res);
    //         })
    //     );
    // }

    dispatch(() => totalSupply());

    const x = 8;

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
                            disabled={mintButtonReducer.count === x}
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
                            Remaining Amount To Mint: <span className="has-text-cyellow">{x}</span>
                        </h2>
                    </div>
                </div>{' '}
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintSection;

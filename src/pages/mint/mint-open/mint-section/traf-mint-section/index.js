import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';
import { traf } from 'patterns/singleton/mint-functions';
import { start_traf_tx } from 'redux/actions/mint3Actions';

const TRAFMintSection = () => {
    const [balanceOfTRAF, setBalanceOfTRAF] = useState(0);
    const [amountLeftTRAF, setAmountLeftTRAF] = useState(0);

    const formik = useFormik({
        initialValues: {
            trafAmount: 2,
        },

        onSubmit: async values => {
            dispatch(start_traf_tx(values.trafAmount));
        },
    });

    const { mintButtonReducer, mint3Reducer } = useSelector(state => state);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const mintsUsed = await traf().getMints(walletReducer.address);
                // console.log('🚀 ~ file: index.js ~ line 39 ~ MintSection ~ mintsUsed', mintsUsed);
                setAmountLeftTRAF(10 - mintsUsed.TRAFholdersMints);

                const trafBalance = await traf().balanceOf(walletReducer.address);
                setBalanceOfTRAF(trafBalance);
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

    return balanceOfTRAF > 0 ? (
        <form onSubmit={formik.handleSubmit}>
            <div className="columns is-centered is-flex">
                <div className="column is-narrow">
                    <button
                        className="button is-medium is-borderless is-cyellow responsive-btn"
                        style={{ borderRadius: '1000px' }}
                        onClick={decrementButton}
                        disabled={mintButtonReducer.count === 0}
                        type="button"
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
                        type="submit"
                    >
                        <p className="has-text-weight-bold">
                            MINT <span className="has-text-primary">{mintButtonReducer.count}</span> NFTs
                        </p>
                    </button>
                </div>
                <div className="column is-narrow">
                    <button
                        className="button is-medium is-borderless is-cyellow responsive-btn"
                        style={{ borderRadius: '1000px' }}
                        onClick={incrementButton}
                        disabled={mintButtonReducer.count === amountLeftTRAF}
                        type="button"
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
                        Remaining Amount To Mint: <span className="has-text-cyellow">{amountLeftTRAF}</span>
                    </h2>
                </div>
            </div>
        </form>
    ) : (
        <div className="columns is-centered">
            <div className="column is-narrow">
                <p className="subtitle has-text-weight-bold has-text-danger">You are not eligible for TRAF Mint.</p>
            </div>
        </div>
    );
};

export default TRAFMintSection;

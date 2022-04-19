import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';
import { traf } from 'patterns/singleton/mint-functions';
import { start_traf_tx } from 'redux/actions/mint3Actions';
import { primeholder_get_request_thunk } from 'redux/actions/holderActions';

const TRAFMintSectionForm = () => {
    const [balanceOfTRAF, setBalanceOfTRAF] = useState(0);
    const [amountLeftTRAF, setAmountLeftTRAF] = useState(0);

    const { mintButtonReducer, mint3Reducer, holderReducer } = useSelector(state => state);
    console.log('🚀 ~ file: index.js ~ line 14 ~ TRAFMintSectionForm ~ holderReducer', holderReducer);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 15 ~ TRAFMintSectionForm ~ web3Reducer', web3Reducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            primeholder_get_request_thunk({
                requestName: 'isPrimeholder',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [web3Reducer.initialized, walletReducer.address, dispatch]);

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

    const formik = useFormik({
        initialValues: {
            trafAmount: 0,
        },

        onSubmit: async values => {
            dispatch(start_traf_tx(values.trafAmount));
        },
    });

    const incrementButton = () => {
        dispatch({ type: 'INCREMENT' });
        formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) + 1);
    };

    const decrementButton = () => {
        if (mintButtonReducer.count > 0) {
            dispatch({ type: 'DECREMENT' });
            formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) - 1);
        }
    };

    return balanceOfTRAF > 0 ? (
        <>
            <div className="columns is-centered pt-6">
                <form onSubmit={formik.handleSubmit}>
                    <div className="columns">
                        <div className="column">
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
                        <div className="column">
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
                        <div className="column">
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
                </form>
            </div>
            <div className="columns is-centered pt-4">
                <div className="column is-narrow">
                    <h2 className="is-size-6 has-text-white has-text-weight-bold">
                        YOUR AVAILABLE MINTS FOR HOLDERS MINT:
                        <span className="has-text-cyellow"> {amountLeftTRAF}</span>
                    </h2>
                </div>
            </div>
        </>
    ) : (
        <div className="columns is-centered pt-6">
            <div className="column is-narrow">
                <h2 className="is-size-6 has-text-redape has-text-weight-bold">
                    YOU ARE NOT ELIGIBLE FOR THE HOLDERS MINT
                </h2>
            </div>
        </div>
    );
};

export default TRAFMintSectionForm;

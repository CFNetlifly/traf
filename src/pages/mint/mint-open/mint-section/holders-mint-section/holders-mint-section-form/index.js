import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';
import {
    primeholder_get_request_thunk,
    generalholder_get_request_thunk,
    partnerholder_get_request_thunk,
} from 'redux/actions/holderActions';

import { mintEp3 } from 'patterns/proxy/mint-functions';

const HoldersMintSectionForm = () => {
    const [amountLeftTRAF, setAmountLeftTRAF] = useState(0);
    const [isEligible, setIsEligible] = useState(false);
    console.log('🚀 ~ file: index.js ~ line 18 ~ TRAFMintSectionForm ~ isEligible', isEligible);

    const { mintButtonReducer, holderReducer } = useSelector(state => state);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            primeholder_get_request_thunk({
                requestName: 'isPrimeHolder',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [web3Reducer.initialized, walletReducer.address, dispatch]);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            generalholder_get_request_thunk({
                requestName: 'isGeneralHolder',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [web3Reducer.initialized, walletReducer.address, dispatch]);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            partnerholder_get_request_thunk({
                requestName: 'isPartnerHolder',
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
                const mintsLeft = await mintEp3().MintsLeft();
                const generalMintsLeft = await mintEp3().GeneralMintsLeft();
                const hmData = await mintEp3().HoldersMint().Get_HM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 66 ~ hmData', hmData);
                const ghmData = await mintEp3().GeneralHoldersMint().Get_GHM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 66 ~ ghmData', ghmData);
                const prmData = await mintEp3().PreniumMint().Get_PRM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 67 ~ prmData', prmData);
                const pmData = await mintEp3().PartnersMint().Get_PM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 72 ~ pmData', pmData);
                const almData = await mintEp3().AllowListMint().Get_ALM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 74 ~ almData', almData);
                const pumData = await mintEp3().PublicMint().Get_PUM_Data(walletReducer.address);
                setIsEligible(false);
                console.log('🚀 ~ file: index.js ~ line 76 ~ pumData', pumData);
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
            // dispatch(start_traf_tx(values.trafAmount));
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

    return isEligible === true ? (
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

export default HoldersMintSectionForm;

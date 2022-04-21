import React, { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';
import { primeholder_get_request_thunk } from 'redux/actions/holderActions';
import { start_holdersmint_tx } from 'redux/actions/mint3Actions';
import { mintEp3 } from 'patterns/proxy/mint-functions';

const HoldersMintSectionForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [mintsLeft, setMintsLeft] = useState(0);
    const [mintPrice, setMintPrice] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const { holderReducer } = useSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 19 ~ HoldersMintSectionForm ~ holderReducer', holderReducer);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const isEligible =
        holderReducer.isPrimeHolder.success && holderReducer.isPrimeHolder.data.data.primeholder && isActive;

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
        (async () => {
            try {
                const hmData = await mintEp3().HoldersMint().Get_HM_Data(walletReducer.address);
                // console.log('🚀 ~ file: index.js ~ line 66 ~ hmData', hmData);
                setIsActive(hmData.active);
                setMintPrice(new BigNumber(hmData.price).toString());
                setMintsLeft(parseInt(hmData.user_mint_limit - hmData.user_mints));
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
            dispatch(
                start_holdersmint_tx({
                    amount: values.trafAmount,
                    price: mintPrice,
                    nft_id: holderReducer.isPrimeHolder.data.data.primetoken,
                })
            );
        },
    });

    const incrementButton = () => {
        setTrigger(trigger + 1);
        formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) + 1);
    };

    const decrementButton = () => {
        if (trigger > 0) {
            setTrigger(trigger - 1);
            formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) - 1);
        }
    };

    return isEligible ? (
        <>
            <div className="columns is-centered pt-6">
                <form onSubmit={formik.handleSubmit}>
                    <div className="columns is-flex is-centered">
                        <div className="column">
                            <button
                                className="button is-medium is-borderless is-cyellow responsive-btn"
                                style={{ borderRadius: '1000px' }}
                                onClick={decrementButton}
                                disabled={trigger === 0}
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
                                disabled={trigger === 0}
                                type="submit"
                            >
                                <p className="has-text-weight-bold">
                                    MINT <span className="has-text-primary">{trigger}</span> NFTs
                                </p>
                            </button>
                        </div>
                        <div className="column">
                            <button
                                className="button is-medium is-borderless is-cyellow responsive-btn"
                                style={{ borderRadius: '1000px' }}
                                onClick={incrementButton}
                                disabled={trigger === mintsLeft}
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
                        <span className="has-text-cyellow"> {mintsLeft}</span>
                    </h2>
                </div>
            </div>
        </>
    ) : (
        // <div className="columns is-centered pt-6">
        //     <div className="column is-narrow">
        //         <h2 className="is-size-6 has-text-redape has-text-weight-bold">
        //             YOU ARE NOT ELIGIBLE FOR THE HOLDERS MINT
        //         </h2>
        //     </div>
        // </div>
        <></>
    );
};

export default HoldersMintSectionForm;

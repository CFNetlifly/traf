import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';
import { partnerholder_get_request_thunk } from 'redux/actions/holderActions';

import { mintEp3 } from 'patterns/proxy/mint-functions';

const PartnersMintSectionForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [mintsLeft, setMintsLeft] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const { holderReducer } = useSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 15 ~ PartnersMintSectionForm ~ holderReducer', holderReducer);

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

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
                const pmData = await mintEp3().PartnersMint().Get_PM_Data(walletReducer.address);
                console.log('🚀 ~ file: index.js ~ line 39 ~ pmData', pmData);
                setIsActive(pmData.active);
                setMintsLeft(parseInt(pmData.user_mint_limit - pmData.user_mints));
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
        setTrigger(trigger + 1);
        formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) + 1);
    };

    const decrementButton = () => {
        if (trigger > 0) {
            setTrigger(trigger - 1);
            formik.setFieldValue('trafAmount', Number(formik.values.trafAmount) - 1);
        }
    };

    return isActive ? (
        <>
            <div className="columns is-centered pt-6">
                <form onSubmit={formik.handleSubmit}>
                    <div className="columns">
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
                        YOUR AVAILABLE MINTS FOR PARTNERS MINT:
                        <span className="has-text-cyellow"> {mintsLeft}</span>
                    </h2>
                </div>
            </div>
        </>
    ) : (
        <div className="columns is-centered pt-6">
            <div className="column is-narrow">
                <h2 className="is-size-6 has-text-redape has-text-weight-bold">
                    YOU ARE NOT ELIGIBLE FOR THE PARTNERS MINT
                </h2>
            </div>
        </div>
    );
};

export default PartnersMintSectionForm;

import React, { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { useFormik } from 'formik';

import { mintEp3 } from 'patterns/proxy/mint-functions';
import { start_publicmint_tx } from 'redux/actions/mint3Actions';

const PublicMintSectionForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [mintPrice, setMintPrice] = useState(0);
    // console.log('🚀 ~ file: index.js ~ line 14 ~ PublicMintSectionForm ~ mintPrice', mintPrice);
    const [mintsLeft, setMintsLeft] = useState(0);
    const [trigger, setTrigger] = useState(0);

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const pumData = await mintEp3().PublicMint().Get_PUM_Data(walletReducer.address);
                // console.log('🚀 ~ file: index.js ~ line 26 ~ pumData', pumData);
                setIsActive(pumData.active);
                setMintsLeft(parseInt(pumData.user_mint_limit - pumData.user_mints));
                setMintPrice(new BigNumber(pumData.price).toString());
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
                start_publicmint_tx({
                    amount: values.trafAmount,
                    price: mintPrice,
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

    return isActive ? (
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
                        YOUR AVAILABLE MINTS FOR PUBLIC MINT:
                        {/* YOUR AVAILABLE MINTS FOR RAFFLE MINT: */}
                        <span className="has-text-cyellow"> {mintsLeft}</span>
                    </h2>
                </div>
            </div>
        </>
    ) : (
        <div className="columns is-centered pt-6">
            <div className="column is-narrow">
                <h2 className="is-size-6 has-text-redape has-text-weight-bold">
                    YOU ARE NOT ELIGIBLE FOR THE PUBLIC MINT
                    {/* YOU ARE NOT ELIGIBLE FOR THE RAFFLE MINT */}
                </h2>
            </div>
        </div>
    );
};

export default PublicMintSectionForm;

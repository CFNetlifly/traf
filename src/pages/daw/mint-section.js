/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import CountDown from 'components/count-down';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import { connect } from 'react-redux';
import {
    request_change_network,
    check_connected_to_operating_network,
    request_connection,
} from 'redux/actions/walletActions';
import { start_minting_tx, daw_minting_tx } from 'redux/actions/txActions';

const Form = props => {
    const [videoOpen, setVideoOpen] = useState(false);

    const [webData, setWebData] = useState(null);
    // console.log(webData);
    // const erc_contract = props.web3Reducer.contracts['DAW'];

    const { web3Reducer } = props;
    //console.log(props.wallet.con);
    useEffect(() => {
        props.check_connected_to_operating_network();
    }, [props.wallet.networkId]);

    useEffect(() => {
        if (!web3Reducer.initialized || props.wallet.currentAccount === '') return;

        getWebData();
    }, [web3Reducer, props.wallet.currentAccount, props.wallet.connectedToOperatingNetwork]);

    // console.log(webData);
    const getWebData = async () => {
        if (props.wallet.connectedToOperatingNetwork) {
            let webData = null;
            // console.log(await erc_contract.methods.webData(props.wallet.currentAccount).call());
            const dawContract = props.web3Reducer.contracts['DAW'];
            const trafContract = props.web3Reducer.contracts['ERC_CONTRACT'];
            const daw_traf = props.web3Reducer.contracts['DAW_TRAF'];

            try {
                // const claimables = await dawContract.methods.claimables(props.wallet.currentAccount).call();
                // const price = await dawContract.methods.price().call();
                const isMintingAvailable = await daw_traf.methods.minting().call();
                const price = await daw_traf.methods.price().call();

                const balance = await dawContract.methods.balanceOf(props.wallet.currentAccount).call();
                const _webData = await trafContract.methods.webData(props.wallet.currentAccount).call();

                webData = {
                    ..._webData,
                    balance,
                    price,
                    isMintingAvailable,
                };
            } catch (e) {
                console.log('ERROR CONSULTING DATA', e);
            } finally {
                setWebData(webData);
            }
        } else {
            setWebData(null);
        }
    };
    // console.log(webData);

    // const validationSchema = Yup.object().shape({
    //     mintQuantity: Yup.number(),
    // });

    const formik = useFormik({
        initialValues: {
            mintQuantity: 1,
        },
        // validationSchema: validationSchema,
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            // const wallet = props.wallet;

            // const webData = await erc_contract.methods.webData(props.wallet.currentAccount).call();

            await props.daw_minting_tx({
                value: Number(webData.price) * Number(values.mintQuantity),
                amount: Number(values.mintQuantity),
            });
        },
    });

    useEffect(() => {
        getWebData();
        formik.setFieldValue('mintQuantity', 1);
    }, [props.txReducer.MINT_DAW_TX.success]);

    const onIncreaseClicked = () => {
        if (webData == null) return;

        if (Number(formik.values.mintQuantity) < webData.leftNFT) {
            formik.setFieldValue('mintQuantity', Number(formik.values.mintQuantity) + 1);
        }
    };

    const onDecreaseClicked = () => {
        if (webData == null) return;

        if (Number(formik.values.mintQuantity) > 1)
            formik.setFieldValue('mintQuantity', Number(formik.values.mintQuantity) - 1);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={`modal ${videoOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <figure className="image is-16by9">
                        <iframe
                            title="video"
                            className="has-ratio"
                            width="640"
                            height="360"
                            src="https://www.youtube-nocookie.com/embed/kuWPm0w1bfE"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </figure>
                </div>
                <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={() => setVideoOpen(false)}
                ></button>
            </div>
            <div className="has-text-centered">
                {/* hidden input to count mints quantity */}
                <div className="control">
                    <input
                        className="is-hidden"
                        name="mintQuantity"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.mintQuantity}
                    />
                </div>

                {props.wallet.currentAccount ? (
                    props.wallet.connectedToOperatingNetwork ? (
                        <div>
                            <button
                                className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4"
                                type="button"
                                style={{ height: '', width: '40px' }}
                                onClick={onDecreaseClicked}
                                disabled={Number(formik.values.mintQuantity) === 1}
                            >
                                -
                            </button>{' '}
                            &nbsp;
                            <button
                                className={`button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4 ${
                                    props.txReducer.MINT_DAW_TX.loading ? 'is-loading' : ''
                                } `}
                                type="submit"
                                disabled={
                                    !props.wallet.connectedToOperatingNetwork ||
                                    (webData && webData.balance === 0) ||
                                    !(webData && webData.isMintingAvailable)
                                }
                            >
                                MINT {formik.values.mintQuantity}
                            </button>{' '}
                            &nbsp;
                            <button
                                className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4"
                                type="button"
                                style={{ height: '', width: '40px' }}
                                onClick={onIncreaseClicked}
                                disabled={webData && webData.mintsLeft === formik.values.mintQuantity}
                            >
                                +
                            </button>
                            <br />
                            <br />
                            {webData == null ? null : (
                                <div className="">
                                    <h1 className="has-text-white has-text-weight-bold">
                                        {' '}
                                        Episode 2 Tokens Left: {webData.leftNFT}
                                    </h1>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="button is-cyellow"
                            onClick={() => props.request_change_network(1)}
                        >
                            Switch to ETH Mainnet
                        </button>
                    )
                ) : (
                    <button
                        type="button"
                        className="button is-cyellow"
                        onClick={async () => await props.request_connection()}
                    >
                        Connect wallet
                    </button>
                )}

                <div>
                    {webData && webData.mintsLeft === 0
                        ? 'You have reached the minting limit for this episode! Thank you so much!'
                        : ''}
                </div>
                <br />
                <br />
                <div className="has-text-centered has-text-weight-bold has-text-light has-font-audiowide is-size-6">
                    <div style={{ color: '#d1d1d1' }}>
                        Public sale of episode 2 is LIVE (0.95 Eth + Gas)
                        <br />
                        5 Tokens per wallet / MetaMask only
                        <br />
                    </div>
                    <br />
                    <a className="has-text-warning" onClick={() => setVideoOpen(true)}>
                        HOW TO MINT FROM YOUR SMARTPHONE{' '}
                    </a>
                    {/* <hr style={{width:'200px', margin: '40px auto', background: '#4E4E4E' }}/>
                    <span className="has-text-warning" onClick={e => setVideoOpen(true)}>
                        
                        {
                            webData && webData.giveaway1 ?

                                <div>
                                    TOKENS TILL BORED APE GIVEAWAY
                                    <br/>
                                    {webData.giveaway1}
                                </div>
                            :
                               <div> CONNECT YOUR WALLET TO SEE HOW MANY MINTS LEFT UNTILL BORED APE GIVEAWAY</div>
                        }                        
                    </span> */}
                </div>
            </div>
        </form>
    );
};

Form.propTypes = {
    wallet: PropTypes.object.isRequired,
    txReducer: PropTypes.object.isRequired,
    request_connection: PropTypes.func.isRequired,
    request_change_network: PropTypes.func.isRequired,
    web3Reducer: PropTypes.object.isRequired,
    daw_minting_tx: PropTypes.func.isRequired,
    check_connected_to_operating_network: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer,
    txReducer: state.txReducer,
});
export default connect(mapStateToProps, {
    request_change_network,
    request_connection,

    check_connected_to_operating_network,
    start_minting_tx,
    daw_minting_tx,
})(Form);

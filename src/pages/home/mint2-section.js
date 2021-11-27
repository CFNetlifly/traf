import { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CountDown from 'components/count-down';

import { connect } from "react-redux";
import {request_change_network, check_connected_to_operating_network, request_connection} from 'redux/actions/walletActions';
import { start_minting_ep2_tx } from "redux/actions/mint2Actions";

const MintSection2 = props => {

    const [videoOpen, setVideoOpen] = useState(false);
    const {wallet} = props;
    const {web3, contracts} = props.web3Reducer;
    const web3Initialized = props.web3Reducer.initialized;

    const [triggerer, setTriggerer] = useState(0);

    const [balancesOfUser, setBalancesOfUser] = useState(0);

    const formik = useFormik({
        initialValues: {
            mintQuantity: 1,
        },                
        onSubmit: async values => {
            
            await props.start_minting_ep2_tx({
                amount: values.mintQuantity
            });

            setTriggerer(triggerer + 1);
            formik.setFieldValue( "mintQuantity", 1);

        },
    });

    useEffect(
        () => {
            props.check_connected_to_operating_network();
        }, [props.wallet.networkId]
    );


    useEffect(
        () => {
            getWebData();
        }, [web3, wallet, triggerer]
    );

    const getWebData = async () => {
        
        if(wallet.currentAccount != '' &&  web3Initialized && wallet.connectedToOperatingNetwork) {

            const ercContract = contracts['MINT_PASS'];
            const balanceOfUser = await ercContract.methods.balanceOf(props.wallet.currentAccount, 0).call();
            setBalancesOfUser(balanceOfUser); 
            
            console.log(balanceOfUser);
        
        }
    }

    const onIncreaseClicked = () => {
        if(balancesOfUser == 0) return;

        if( Number(formik.values.mintQuantity) < balancesOfUser)
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) + 1 );
        
    }

    const onDecreaseClicked = () => {
        if(balancesOfUser == 0) return;

        if( Number(formik.values.mintQuantity) > 1)
            formik.setFieldValue( "mintQuantity",  Number(formik.values.mintQuantity) - 1 );
    }

    return(
        <div>
            <div className={`modal ${videoOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <figure className="image is-16by9">
                        <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/kuWPm0w1bfE" frameBorder="0" allowFullScreen></iframe>
                    </figure>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={e => setVideoOpen(false)}></button>
            </div>
            <form onSubmit={formik.handleSubmit}>
            {
                props.wallet.currentAccount
                ? (
                    props.wallet.connectedToOperatingNetwork ?
                        <div>
                            <button className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4" type="button" style={{height: '', width: '40px'}} onClick={onDecreaseClicked} disabled={balancesOfUser == 0 ? true : false}>-</button> &nbsp;
                            <button className={`button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4 ${props.mint2Reducer["MINT_EP2_TX"].loading ? 'is-loading' : ''} `} type="submit" disabled={!wallet.connectedToOperatingNetwork || balancesOfUser == 0} >MINT {formik.values.mintQuantity}</button> &nbsp;
                            <button className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4" type="button" style={{height: '', width: '40px'}} onClick={onIncreaseClicked} disabled={balancesOfUser == 0}>+</button>
                            <br/><br/>
                            {
                                balancesOfUser == 0 ?
                                    <div className="has-text-centered">
                                        <p className="has-text-weight-bold is-size-6 has-text-white has-text-centered">You don't have any mint pass in your wallet</p>
                                    </div>
                                :
                                    null
                            }                           
                        </div>
                    :
                        <button type="button" className="button is-cyellow" onClick={e => props.request_change_network(1)}>
                            Switch to ETH Mainnet
                        </button>
                ) : (
                    <button type="button" className="button is-cyellow" onClick={async e => await props.request_connection()}>
                        Connect wallet
                    </button>
                )
            }
            </form>
            <br/><br/> 
            <div className="has-text-centered has-text-weight-bold has-text-light has-font-audiowide is-size-6">
                <div style={{color: '#d1d1d1'}}>
                        333 tokens available only! <br/><br/>

                    Use your mint pass to mint Episode 2 before the public sale<br/>
                    Episode 2 token with a mint pass = 0.5 ETH<br/>
                    Episode 2 token without a mint pass = 0.95 ETH<br/>
                </div>
                <br/>
                <a className="has-text-warning" onClick={e => setVideoOpen(true)}>HOW TO MINT FROM YOUR SMARTPHONE </a>
                <hr style={{width:'200px', margin: '40px auto', background: '#4E4E4E' }}/>
                <span className="has-text-warning"> PUBLIC MINT WILL OPEN IN <br/> <CountDown className="is-uppercase"/></span>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer,
    mint2Reducer: state.mint2Reducer
});

export default connect(
    mapStateToProps,
    {
        request_change_network,
        check_connected_to_operating_network,
        request_connection,
        start_minting_ep2_tx
    }
)(MintSection2);

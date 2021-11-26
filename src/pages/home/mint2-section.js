import { useState, useEffect } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { connect } from "react-redux";
import {request_change_network, check_connected_to_operating_network, request_connection} from 'redux/actions/walletActions';
import { start_minting_ep2_tx } from "redux/actions/mint2Actions";

const MintSection2 = props => {

    const {wallet} = props;
    const {web3, contracts} = props.web3Reducer;
    const web3Initialized = props.web3Reducer.initialized;

    const [balancesOfUser, setBalancesOfUser] = useState(0);

    const formik = useFormik({
        initialValues: {
            mintQuantity: 1,
        },                
        onSubmit: async values => {
            
            props.start_minting_ep2_tx({
                amount: values.mintQuantity
            });

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
        }, [web3, wallet]
    );

    const getWebData = async () => {
        
        if(wallet.currentAccount != '' &&  web3Initialized && wallet.connectedToOperatingNetwork) {

            const ercContract = contracts['ERC_CONTRACT2'];
            const balanceOfUser = await ercContract.methods.balanceOf(props.wallet.currentAccount, 0).call();
            setBalancesOfUser(balanceOfUser);                   
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
            <form onSubmit={formik.handleSubmit}>
            {
                props.wallet.currentAccount
                ? (
                    props.wallet.connectedToOperatingNetwork ?
                        <div>
                            <button className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4" type="button" style={{height: '', width: '40px'}} onClick={onDecreaseClicked} disabled={balancesOfUser == 0 ? true : false}>-</button> &nbsp;
                            <button className={`button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4 ${false ? 'is-loading' : ''} `} type="submit" disabled={!wallet.connectedToOperatingNetwork || balancesOfUser == 0} >MINT {formik.values.mintQuantity}</button> &nbsp;
                            <button className="button has-font-audiowide is-cyellow is-rounded has-text-black has-text-weight-bold is-size-4" type="button" style={{height: '', width: '40px'}} onClick={onIncreaseClicked} disabled={balancesOfUser == 0}>+</button>
                            <br/><br/>
                            {
                                balancesOfUser == 0 ?
                                    <div className="has-text-centered">
                                        <p className="has-text-weight-bold is-size-6 has-text-white has-text-left">You have no mint passes in your wallet</p>
                                    </div>
                                :
                                    null
                            }
                            {/*
                                webData == null ?
                                    null
                                :
                                    <div className="">
                                        <h1 className="subtitle mb-0 has-text-white has-text-weight-bold is-hidden">Your mints: {webData.userMints}</h1>
                                        <h1 className="has-text-white has-text-weight-bold"> Episode 1 Tokens Left: {webData.leftNFT}</h1>
                                    </div>
                            */}
                        </div>
                    :
                        <button type="button" className="button is-cyellow" onClick={e => props.request_change_network(4)}>
                            Switch to ETH Mainnet
                        </button>
                ) : (
                    <button type="button" className="button is-cyellow" onClick={async e => await props.request_connection()}>
                        Connect wallet
                    </button>
                )
            }
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    wallet: state.walletReducer,
    web3Reducer: state.web3Reducer
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
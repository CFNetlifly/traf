import { TX_LOADING, TX_FAILED, TX_SUCCESS } from '../constants';

// import { store as notificationStore } from 'react-notifications-component';
// import {successNotification, errorNotification} from 'notifications';

/* *~~*~~*~~*~~*~~*~~* TX PLAIN ACTIONS *~~*~~*~~*~~*~~*~~* */
const tx_loading = txType => {
    return {
        type: TX_LOADING,
        txType: txType,
    };
};

const tx_failed = txType => {
    return {
        type: TX_FAILED,
        txType: txType,
    };
};

const tx_success = txType => {
    return {
        type: TX_SUCCESS,
        txType: txType,
    };
};

/* *~~*~~*~~*~~*~~*~~* TX THUNK ACTIONS *~~*~~*~~*~~*~~*~~* */
export const start_minting_ep2_tx = txData => {
    return async (dispatch, getState) => {
        dispatch(tx_loading('MINT_EP2_TX'));

        const { web3Reducer } = getState();
        const { contracts } = web3Reducer;
        const wallet = getState().walletReducer;

        const amount = txData.amount;

        const mintPassContract = contracts['MINT_PASS'];

        // console.log(mintPassContract.methods);
        // console.log(ercContract.methods);

        // const balanceOfUser = await mintPassContract.methods.balanceOf(wallet.currentAccount, 0).call();
        let pureAmount = await mintPassContract.methods.pureNFTsOf(wallet.currentAccount).call();

        const { purePrice, impurePrice } = await mintPassContract.methods.prices().call();

        pureAmount = pureAmount > amount ? amount : pureAmount;
        const impureAmount = amount - pureAmount;

        const cost = pureAmount * purePrice + impureAmount * impurePrice;

        // // console.log(erc_contract.methods);
        const tx = await mintPassContract.methods.mint(wallet.currentAccount, txData.amount.toString());

        try {
            await tx.send({
                from: wallet.currentAccount,
                value: cost,
                gas: 150000,
                maxPriorityFeePerGas: null,
                maxFeePerGas: null,
            });

            dispatch(tx_success('MINT_EP2_TX'));
        } catch (err) {
            console.log(err);
            dispatch(tx_failed('MINT_EP2_TX'));
        }
    };
};

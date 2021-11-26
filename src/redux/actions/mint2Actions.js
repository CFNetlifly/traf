import {
    TX_LOADING,
    TX_FAILED,
    TX_SUCCESS
} from '../constants';

// import { store as notificationStore } from 'react-notifications-component';
// import {successNotification, errorNotification} from 'notifications';


/* *~~*~~*~~*~~*~~*~~* TX PLAIN ACTIONS *~~*~~*~~*~~*~~*~~* */
const tx_loading = txType => {
    return{
        type: TX_LOADING,
        txType: txType
    }
}

const tx_failed = txType => {
    return{
        type: TX_FAILED,
        txType: txType
    }
}

const tx_success = txType => {
    return{
        type: TX_SUCCESS,
        txType: txType
    }
}

/* *~~*~~*~~*~~*~~*~~* TX THUNK ACTIONS *~~*~~*~~*~~*~~*~~* */
export const start_minting_ep2_tx = txData => {
    return async (dispatch, getState) => {

        dispatch( tx_loading( 'MINT_EP2_TX' ) );

        const {web3Reducer, walletReducer} = getState();
        const {contracts} = web3Reducer;
        const wallet = getState().walletReducer;

        const amount = txData.amount;

        const ercContract = contracts['ERC_CONTRACT2'];
        console.log(ercContract);


        const balanceOfUser = await ercContract.methods.balanceOf(wallet.currentAccount, 0).call();                    
        let pureAmount = await ercContract.methods.pureNFTsOf(wallet.currentAccount).call();        

        const {purePrice, impurePrice} = await ercContract.methods.prices().call();
        
        pureAmount = pureAmount > amount ? amount : pureAmount;
        const impureAmount = amount - pureAmount;

        const cost = (pureAmount * purePrice) + (impureAmount  * impurePrice);

        
        // // console.log(erc_contract.methods);
        const tx = await ercContract.methods.mint( wallet.currentAccount, txData.amount.toString() );


        try{
            tx.send({
                from: wallet.currentAccount,
                value: cost
            });
            dispatch( tx_success( 'MINT_EP2_TX' ) );
        }
        catch(err){
            dispatch( tx_failed( 'MINT_EP2_TX' ) );
            console.log(err);
        }

        // try {
        //     // const estimatedGas = await tx.estimateGas({
        //     //     from: walletReducer.currentAccount,
        //     //     value: txData.value,
        //     //     gas: web3.eth.
        //     // });

        //     await tx.send({
        //         from: walletReducer.currentAccount,
        //         value: txData.value,
        //         gas: 100000,
        //         maxPriorityFeePerGas: null,
        //         maxFeePerGas: null
        //     });
        //     dispatch( tx_success( 'MINT_EP2_TX' ) );
        // } catch (e) {
        //     dispatch( tx_failed( 'MINT_EP2_TX' ) );
        //     console.log(e);
        // }
        // finally{
        //     // const txStatus = getState().txReducer[txs.TRANSFER_REGULAR_TKN];

        //     // if(txStatus.success)
        //     //     notificationStore.addNotification( successNotification("Tx successful", `sent ${amount} ${tokenData.name} to ${receiver}`) );
        //     //
        //     // if(txStatus.error)
        //     //     notificationStore.addNotification( errorNotification("Tx failed", "sorry, something wen't wrong") );

        // }
    }
}

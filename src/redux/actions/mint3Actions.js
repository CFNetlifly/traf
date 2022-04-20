import { mintEp3 } from 'patterns/proxy/mint-functions';
import { traf, nonWlPartners, wlPartners } from 'patterns/singleton/mint-functions';
import {
    partnerholder_get_request_thunk,
    generalholder_get_request_thunk,
    primeholder_get_request_thunk,
} from './holderActions';
import { Store as notificationStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'static/notifications';
import celesteStore from 'celeste-framework/dist/store';

const fetch_data_traf_request = () => {
    return {
        type: 'FETCH_DATA_TRAF_REQUEST',
    };
};

const fetch_data_traf_success = data => {
    return {
        type: 'FETCH_DATA_TRAF_SUCCESS',
        data,
    };
};

const fetch_data_traf_failed = error => {
    return {
        type: 'FETCH_DATA_TRAF_FAILED',
        error,
    };
};

export const fetch_data_traf = () => {
    return async dispatch => {
        const walletReducer = celesteStore.getState().walletReducer;

        dispatch(fetch_data_traf_request());

        try {
            const trafBalance = await traf().balanceOf(walletReducer.address);
            const wlPartnersBalance = await wlPartners().balanceOf(walletReducer.address);
            const nonWlPartnersBalance = await nonWlPartners().balanceOf(walletReducer.address);
            dispatch(
                fetch_data_traf_success({
                    balanceOfTRAF: trafBalance,
                    balanceOfWLPartners: wlPartnersBalance,
                    balanceOfNonWLPartners: nonWlPartnersBalance,
                })
            );
        } catch (e) {
            dispatch(fetch_data_traf_failed(e));
            errorNotification(notificationStore, 'Error', 'Something went wrong');
        }
    };
};

export const start_holdersmint_tx = nft_id => {
    return async () => {
        const walletReducer = celesteStore.getState().walletReducer;
        try {
            const res = await mintEp3().HoldersMint().HM(nft_id, walletReducer.address);
            notificationStore.addNotification(successNotification('Minting Successful'));
        } catch (e) {
            errorNotification(notificationStore, 'Error', 'Something went wrong');
        }
    };
};

// export const start_traf_tx = trafAmount => {
//     return async dispatch => {
//         try {
//             const res = await traf().holdersMint(trafAmount);
//             // fetch smart contract data again

//             notificationStore.addNotification(successNotification('Minting successful'));
//         } catch (e) {
//             notificationStore.addNotification(errorNotification('Minting failed'));
//         }
//     };
// };

// export const start_partners_tx = () => {
//     return async dispatch => {
//         try {
//             const res = await wlPartners.partnersMint();
//             notificationStore.addNotification(successNotification('Minting successful'));
//         } catch (e) {
//             notificationStore.addNotification(errorNotification('Minting failed'));
//         }
//     };
// };

// export const start_non_allowed_tx = () => {
//     return async dispatch => {
//         try {
//             const res = await nonWlPartners.nonAllowedMint();
//             notificationStore.addNotification(successNotification('Minting successful'));
//         } catch (e) {
//             notificationStore.addNotification(errorNotification('Minting failed'));
//         }
//     };
// };

// // export const start_public_tx = () => {
// //     return async dispatch => {
// //         dispatch(public_tx_loading('start'));

// //         try {
// //             const res = await mint.publicMint();
// //             dispatch(public_tx_success('start', res));
// //             notificationStore.addNotification(successNotification('Minting successful'));
// //         } catch (e) {
// //             dispatch(public_tx_failed('start', e));
// //             notificationStore.addNotification(errorNotification('Minting failed'));
// //         }
// //     };
// // };

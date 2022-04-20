import { mintEp3 } from 'patterns/proxy/mint-functions';
import { traf, nonWlPartners, wlPartners } from 'patterns/singleton/mint-functions';
import {
    partnerholder_get_request_thunk,
    generalholder_get_request_thunk,
    primeholder_get_request_thunk,
} from './holderActions';
import { store as ReactNotificationsStore } from 'react-notifications-component';
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
            errorNotification(ReactNotificationsStore, 'Error', 'Something went wrong');
        }
    };
};

export const start_holdersmint_tx = ({ amount, price, nft_id }) => {
    return async () => {
        const walletReducer = celesteStore.getState().walletReducer;
        try {
            const res = await mintEp3().HoldersMint().HM({ amount, price, nft_id });
            ReactNotificationsStore.addNotification(successNotification('Holders Mint', 'Minting Successful'));
        } catch (e) {
            errorNotification(ReactNotificationsStore, 'Error', 'Something went wrong');
        }
    };
};

// PR: Prenium Mint - Presale Mint
export const start_presalemint_tx = ({ amount, price }) => {
    return async () => {
        try {
            const res = await mintEp3().PreniumMint().PRM({ amount, price });
            ReactNotificationsStore.addNotification(successNotification('Presale Mint', 'Minting Successful'));
        } catch (e) {
            errorNotification(ReactNotificationsStore, 'Error', 'Something went wrong');
        }
    };
};

// PUM: Public Mint
export const start_publicmint_tx = ({ amount, price }) => {
    return async () => {
        try {
            const res = await mintEp3().PublicMint().PUM({ amount, price });
            console.log('🚀 ~ file: mint3Actions.js ~ line 85 ~ return ~ res', res);
            ReactNotificationsStore.addNotification(successNotification('Public Mint', 'Minting Successful'));
        } catch (e) {
            errorNotification(ReactNotificationsStore, 'Error', 'Something went wrong');
        }
    };
};

// ALM: Allow List Mint - Raffle Mint
export const start_raffle_tx = ({ amount, price }) => {
    return async () => {
        try {
            const res = await mintEp3().AllowListMint().ALM({ amount, price });
            ReactNotificationsStore.addNotification(successNotification('Raffle Mint', 'Minting Successful'));
        } catch (e) {
            errorNotification(ReactNotificationsStore, 'Error', 'Something went wrong');
        }
    };
};

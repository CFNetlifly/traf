import { Store as NotificationsStore } from 'react-notifications-component';
import { errorNotification, successNotification } from './notifications';

const onConnectError = error => {
    // eslint-disable-next-line eqeqeq
    if (error.code) {
        // METAMASK
        NotificationsStore.addNotification(errorNotification('Connection failed', error.message));
    } else {
        // WALLET CONNECT
        NotificationsStore.addNotification(errorNotification('Connection failed', error.message));
    }

    // throw error;
};

const onNetworkChangeError = error => {
    NotificationsStore.addNotification(errorNotification('Network change failed', error.message));
};

const onClipBoardClick = () => {
    NotificationsStore.addNotification(successNotification('Copied', 'Address copied to clipboard'));
};

export { onConnectError, onNetworkChangeError, onClipBoardClick };

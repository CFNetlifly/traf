import React from 'react';

import { connect } from 'react-redux';
import { request_connection } from 'redux/actions/walletActions';
import './connect-btn.scss';
import PropTypes from 'prop-types';

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectBtn = props => {
    const { wallet } = props;
    //console.log(wallet);

    const onClicked = () => {
        if (wallet.isMetamaskInstalled && !wallet.isConnected) props.request_connection();
    };

    return (
        <button
            className="connect-btn button is-small is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6"
            onClick={onClicked}
        >
            <span>
                {wallet.isConnected && wallet.currentAccount != null
                    ? getAddressReduced(wallet.currentAccount)
                    : 'Connect'}
            </span>
        </button>
    );
};

const mapStateToProps = state => ({
    wallet: state.walletReducer,
});

ConnectBtn.propTypes = {
    wallet: PropTypes.object.isRequired,
    request_connection: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
    request_connection,
})(ConnectBtn);

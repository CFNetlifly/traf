import { useCelesteSelector } from 'celeste-framework';
import trafABI from 'abis/TRAF.json';

import {
    TRAF_TX_FAILED,
    TRAF_TX_LOADING,
    TRAF_TX_SUCCESS,
    PARTNERS_TX_FAILED,
    PARTNERS_TX_LOADING,
    PARTNERS_TX_SUCCESS,
    NON_ALLOWED_TX_FAILED,
    NON_ALLOWED_TX_LOADING,
    NON_ALLOWED_TX_SUCCESS,
    PUBLIC_TX_FAILED,
    PUBLIC_TX_LOADING,
    PUBLIC_TX_SUCCESS,
} from '../constants';

/* *~~*~~*~~*~~*~~*~~* TX PLAIN ACTIONS *~~*~~*~~*~~*~~*~~* */

const traf_tx_loading = txType => ({
    type: TRAF_TX_LOADING,
    txType: txType,
});

const traf_tx_failed = (txType, payload) => ({
    type: TRAF_TX_FAILED,
    txType: txType,
    payload: payload,
});

const traf_tx_success = (txType, payload) => ({
    type: TRAF_TX_SUCCESS,
    txType: txType,
    payload: payload,
});

const partners_tx_loading = txType => ({
    type: PARTNERS_TX_LOADING,
    txType: txType,
});

const partners_tx_failed = (txType, payload) => ({
    type: PARTNERS_TX_FAILED,
    txType: txType,
    payload: payload,
});

const partners_tx_success = (txType, payload) => ({
    type: PARTNERS_TX_SUCCESS,
    txType: txType,
    payload: payload,
});

const non_allowed_tx_loading = txType => ({
    type: NON_ALLOWED_TX_LOADING,
    txType: txType,
});

const non_allowed_tx_failed = (txType, payload) => ({
    type: NON_ALLOWED_TX_FAILED,
    txType: txType,
    payload: payload,
});

const non_allowed_tx_success = (txType, payload) => ({
    type: NON_ALLOWED_TX_SUCCESS,
    txType: txType,
    payload: payload,
});

const public_tx_loading = txType => ({
    type: PUBLIC_TX_LOADING,
    txType: txType,
});

const public_tx_failed = (txType, payload) => ({
    type: PUBLIC_TX_FAILED,
    txType: txType,
    payload: payload,
});

const public_tx_success = (txType, payload) => ({
    type: PUBLIC_TX_SUCCESS,
    txType: txType,
    payload: payload,
});

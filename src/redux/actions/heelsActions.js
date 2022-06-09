import { SET_HEELS_FAILED, SET_HEELS_REQUEST, SET_HEELS_SUCCESS } from '../constants';

export const set_heels_failed = error => {
    return {
        type: SET_HEELS_FAILED,
        error,
    };
};

export const set_heels_request = () => {
    return {
        type: SET_HEELS_REQUEST,
    };
};

export const set_heels_success = () => {
    return {
        type: SET_HEELS_SUCCESS,
    };
};

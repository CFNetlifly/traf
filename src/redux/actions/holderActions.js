import api from 'api';

import {
    PRIMEHOLDER_ELIGIBLE_GET_REQUEST,
    PRIMEHOLDER_ELIGIBLE_GET_SUCCESS,
    PRIMEHOLDER_ELIGIBLE_GET_FAILED,
    PARTNERHOLDER_ELIGIBLE_GET_REQUEST,
    PARTNERHOLDER_ELIGIBLE_GET_SUCCESS,
    PARTNERHOLDER_ELIGIBLE_GET_FAILED,
    GENERALHOLDER_ELIGIBLE_GET_REQUEST,
    GENERALHOLDER_ELIGIBLE_GET_SUCCESS,
    GENERALHOLDER_ELIGIBLE_GET_FAILED,
} from 'redux/constants';

/* *~~*~~*~~*~~*~~* PRIME HOLDER *~~*~~*~~*~~*~~* */

const primeholder_eligible_get_request = fetchData => ({
    type: PRIMEHOLDER_ELIGIBLE_GET_REQUEST,
    payload: fetchData,
});

const primeholder_eligible_get_success = ({ name, res }) => ({
    type: PRIMEHOLDER_ELIGIBLE_GET_SUCCESS,
    payload: {
        name,
        res,
    },
});

const primeholder_eligible_get_failed = error => ({
    type: PRIMEHOLDER_ELIGIBLE_GET_FAILED,
    payload: error,
});

export const primeholder_get_request_thunk = fetchData => {
    return async dispatch => {
        dispatch(primeholder_eligible_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);

            if (callback && typeof callback === 'function') {
                callback(response);
            }
            dispatch(
                primeholder_eligible_get_success({
                    name: requestName,
                    res: response,
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(primeholder_eligible_get_failed(error));
        }
    };
};

/* *~~*~~*~~*~~*~~* PARTNER HOLDER *~~*~~*~~*~~*~~* */

const partnerholder_eligible_get_request = fetchData => ({
    type: PARTNERHOLDER_ELIGIBLE_GET_REQUEST,
    payload: fetchData,
});

const partnerholder_eligible_get_success = data => ({
    type: PARTNERHOLDER_ELIGIBLE_GET_SUCCESS,
    payload: data,
});

const partnerholder_eligible_get_failed = error => ({
    type: PARTNERHOLDER_ELIGIBLE_GET_FAILED,
    payload: error,
});

export const partnerholder_get_request_thunk = fetchData => {
    return async dispatch => {
        dispatch(partnerholder_eligible_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }
            dispatch(partnerholder_eligible_get_success(response));
        } catch (error) {
            dispatch(partnerholder_eligible_get_failed(error));
        }
    };
};

/* *~~*~~*~~*~~*~~* GENERAL HOLDER *~~*~~*~~*~~*~~* */

const generalholder_eligible_get_request = fetchData => ({
    type: GENERALHOLDER_ELIGIBLE_GET_REQUEST,
    payload: fetchData,
});

const generalholder_eligible_get_success = data => ({
    type: GENERALHOLDER_ELIGIBLE_GET_SUCCESS,
    payload: data,
});

const generalholder_eligible_get_failed = error => ({
    type: GENERALHOLDER_ELIGIBLE_GET_FAILED,
    payload: error,
});

export const generalholder_get_request_thunk = fetchData => {
    return async dispatch => {
        dispatch(generalholder_eligible_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }
            dispatch(generalholder_eligible_get_success(response));
        } catch (error) {
            dispatch(generalholder_eligible_get_failed(error));
        }
    };
};

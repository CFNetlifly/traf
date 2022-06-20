import { SET_HEELS_FAILED, SET_HEELS_REQUEST, SET_HEELS_SUCCESS } from '../constants';

const defaultState = {
    error: false,
    loading: false,
    success: false,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_HEELS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case SET_HEELS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
            };
        case SET_HEELS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                success: false,
            };
        default:
            return state;
    }
};

export default reducer;

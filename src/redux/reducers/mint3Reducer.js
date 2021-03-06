import { FETCH_DATA_TRAF_FAILED, FETCH_DATA_TRAF_REQUEST, FETCH_DATA_TRAF_SUCCESS } from '../constants';

const defaultState = {
    loading: false,
    success: false,
    error: false,
    data: {
        balanceOfTRAF: 0,
        balanceOfWLPartners: 0,
        balanceOfNonWLPartners: 0,

        amountLeftTRAF: 0,
        amountLeftWLPartners: 0,
        amountLeftNonWLPartners: 0,
    },
    errorData: null,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_TRAF_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
                errorData: null,
            };
        case FETCH_DATA_TRAF_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.data,
            };
        case FETCH_DATA_TRAF_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                errorData: action.error,
            };
        default:
            return state;
    }
};

export default reducer;

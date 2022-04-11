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

const defaultState = {
    TRAF_TX: {
        loading: false,
        error: false,
        success: false,
        resData: {},
    },

    PARTNERS_TX: {
        loading: false,
        error: false,
        success: false,
        resData: {},
    },

    NON_ALLOWED_TX: {
        loading: false,
        error: false,
        success: false,
        resData: {},
    },

    PUBLIC_TX: {
        loading: false,
        error: false,
        success: false,
        resData: {},
    },

    genericTx: {
        loading: false,
        error: false,
        success: false,
    },
};

const mint3Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TRAF_TX_LOADING:
            return {
                ...state,
                TRAF_TX: {
                    loading: true,
                    error: false,
                    success: false,
                },
            };

        case TRAF_TX_FAILED:
            return {
                ...state,
                TRAF_TX: {
                    loading: false,
                    error: true,
                    success: false,
                    resData: action.payload,
                },
            };

        case TRAF_TX_SUCCESS:
            return {
                ...state,
                TRAF_TX: {
                    loading: false,
                    error: false,
                    success: true,
                    resData: action.payload,
                },
            };

        case PARTNERS_TX_LOADING:
            return {
                ...state,
                PARTNERS_TX: {
                    loading: true,
                    error: false,
                    success: false,
                },
            };

        case PARTNERS_TX_FAILED:
            return {
                ...state,
                PARTNERS_TX: {
                    loading: false,
                    error: true,
                    success: false,
                    resData: action.payload,
                },
            };

        case PARTNERS_TX_SUCCESS:
            return {
                ...state,
                PARTNERS_TX: {
                    loading: false,
                    error: false,
                    success: true,
                    resData: action.payload,
                },
            };

        case NON_ALLOWED_TX_LOADING:
            return {
                ...state,
                NON_ALLOWED_TX: {
                    loading: true,
                    error: false,
                    success: false,
                },
            };

        case NON_ALLOWED_TX_FAILED:
            return {
                ...state,
                NON_ALLOWED_TX: {
                    loading: false,
                    error: true,
                    success: false,
                    resData: action.payload,
                },
            };

        case NON_ALLOWED_TX_SUCCESS:
            return {
                ...state,
                NON_ALLOWED_TX: {
                    loading: false,
                    error: false,
                    success: true,
                    resData: action.payload,
                },
            };

        case PUBLIC_TX_LOADING:
            return {
                ...state,
                PUBLIC_TX: {
                    loading: true,
                    error: false,
                    success: false,
                },
            };

        case PUBLIC_TX_FAILED:
            return {
                ...state,
                PUBLIC_TX: {
                    loading: false,
                    error: true,
                    success: false,
                    resData: action.payload,
                },
            };

        case PUBLIC_TX_SUCCESS:
            return {
                ...state,
                PUBLIC_TX: {
                    loading: false,
                    error: false,
                    success: true,
                    resData: action.payload,
                },
            };

        default:
            return { ...state };
    }
};

export default mint3Reducer;

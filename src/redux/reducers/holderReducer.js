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

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    isPrimeHolder: { ...defaultRequest },
    isPartnerHolder: { ...defaultRequest },
    isGeneralHolder: { ...defaultRequest },
};

const holderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRIMEHOLDER_ELIGIBLE_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };
        case PRIMEHOLDER_ELIGIBLE_GET_SUCCESS:
            return {
                ...state,
                [action.payload.name]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.res,
                },
            };
        case PRIMEHOLDER_ELIGIBLE_GET_FAILED:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    error: true,
                    errorData: action.payload.errorData,
                },
            };
        case PARTNERHOLDER_ELIGIBLE_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };
        case PARTNERHOLDER_ELIGIBLE_GET_SUCCESS:
            return {
                ...state,
                [action.payload.name]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.res,
                },
            };
        case PARTNERHOLDER_ELIGIBLE_GET_FAILED:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    error: true,
                    errorData: action.payload.errorData,
                },
            };
        case GENERALHOLDER_ELIGIBLE_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };
        case GENERALHOLDER_ELIGIBLE_GET_SUCCESS:
            return {
                ...state,
                [action.payload.name]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.res,
                },
            };
        case GENERALHOLDER_ELIGIBLE_GET_FAILED:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    error: true,

                    errorData: action.payload.errorData,
                },
            };
        default:
            return state;
    }
};

export default holderReducer;

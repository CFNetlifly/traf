import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import txReducer from './reducers/txReducer';
import web3Reducer from './reducers/web3Reducer';
import walletReducer from './reducers/walletReducer';
import navbarReducer from './reducers/navbarReducer';
import teamMemberReducer from './reducers/teamMembersReducer';
import mint2Reducer from './reducers/mint2Reducer';
import mintButtonReducer from './reducers/mintButtonReducer';
import modalReducer from './reducers/modalReducer';

const reducer = combineReducers({
    txReducer,
    web3Reducer,
    walletReducer,
    navbarReducer,
    teamMemberReducer,
    mint2Reducer,
    mintButtonReducer,
    modalReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

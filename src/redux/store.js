import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import txReducer from './reducers/txReducer';
import walletReducer from './reducers/walletReducer';
import navbarReducer from './reducers/navbarReducer';
import teamMemberReducer from './reducers/teamMembersReducer';
import mint2Reducer from './reducers/mint2Reducer';
import mintButtonReducer from './reducers/mintButtonReducer';
import modalReducer from './reducers/modalReducer';
import mint3Reducer from './reducers/mint3Reducer';

const reducer = combineReducers({
    txReducer,
    walletReducer,
    navbarReducer,
    teamMemberReducer,
    mint2Reducer,
    mintButtonReducer,
    modalReducer,
    mint3Reducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

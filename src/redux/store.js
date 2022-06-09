import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import txReducer from './reducers/txReducer';
import navbarReducer from './reducers/navbarReducer';
import teamMemberReducer from './reducers/teamMembersReducer';
import mint2Reducer from './reducers/mint2Reducer';
import modalReducer from './reducers/modalReducer';
import mint3Reducer from './reducers/mint3Reducer';
import holderReducer from './reducers/holderReducer';
import heelsReducer from './reducers/heelsReducer';

const reducer = combineReducers({
    txReducer,
    navbarReducer,
    teamMemberReducer,
    mint2Reducer,
    modalReducer,
    mint3Reducer,
    holderReducer,
    heelsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

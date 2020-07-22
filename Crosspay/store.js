import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import allReducers from './reducers';

const middleware = [thunk];
const initialstate = {};

const store = createStore(allReducers,initialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
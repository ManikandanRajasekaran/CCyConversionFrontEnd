import { combineReducers } from 'redux';
import CustomerFormReducer from '../CustomerFormReducer';

const allReducers = combineReducers({
    txndata: CustomerFormReducer
})

export default allReducers;
import {combineReducers} from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
    contact: contactReducer
});

export default rootReducer;
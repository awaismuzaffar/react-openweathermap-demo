import settingsReducer from './settingsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    settings: settingsReducer
});

export default rootReducer;
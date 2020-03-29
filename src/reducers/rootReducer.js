import settingsReducer from './settingsReducer';
import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    weather: weatherReducer,
    settings: settingsReducer
});

export default rootReducer;
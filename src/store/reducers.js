import { combineReducers } from 'redux';
import { weatherReducer } from '../components/weather';

export default combineReducers({
    currentTemperature: weatherReducer,
});

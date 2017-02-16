/**
 * Created by gurushantu on 09-02-2017.
 */
import {combineReducers} from 'redux';
import application from './application';
import employee from './employee';

export default combineReducers({
    application,
    employee
});
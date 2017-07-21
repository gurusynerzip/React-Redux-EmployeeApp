/**
 * Created by gurushantu on 09-02-2017.
 */
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';


const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
let createStoreWithMiddleware = compose(middleware);

const Store = createStoreWithMiddleware(createStore)(rootReducer);

export default Store;

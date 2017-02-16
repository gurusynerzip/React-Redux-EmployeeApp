/**
 * Created by gurushantu on 09-02-2017.
 */
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';

export default function configureStore(initialStore) {
    let createStoreWithMiddleware;
    const logger = createLogger();
    const middleware = applyMiddleware(thunk, logger);
    createStoreWithMiddleware = compose(middleware);

    const store = createStoreWithMiddleware(createStore)(rootReducer, initialStore);

    return store;
}
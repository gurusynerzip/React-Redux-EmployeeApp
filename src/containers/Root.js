/**
 * Created by gurushantu on 08-02-2017.
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();
import MainComponent from '../components/MainComponent';

export default class Root extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <MainComponent {...this.props} />
            </Provider>
        );
    }

}

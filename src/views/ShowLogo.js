/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';



export default class ShowLogo extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="logo">
                <img src="./images/logo.png" alt="Synerzip_Logo" />
            </div>

        );
    }
}
/**
 * Created by gurushantu on 09-02-2017.
 */
import React from 'react';



export default class Logout extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="pull-right app-logout"><a href="http://localhost:3003" style={{color:'white'}}>logout</a></div>
        );
    }
}
/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

export default class Footer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{marginTop:10}} className="app-header">
                <Grid>
                    <Row>
                        <Col sm={12} md={12} style={{height:40, marginTop:10}}>
                            <span style={{color: 'white'}}>Copyright 2016-2017</span>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}
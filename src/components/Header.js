/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ShowLogo from '../views/ShowLogo';
import EmployeeCount from '../views/EmployeeCount';
import Logout from '../views/Logout';
export default class Header extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{marginTop:10}} className="app-header">
                <Grid>
                    <Row>
                        <Col sm={4} md={4}>
                            <ShowLogo></ShowLogo>
                        </Col>
                        <Col sm={4} md={4}>
                            <EmployeeCount></EmployeeCount>
                        </Col>
                        <Col sm={4} md={4}>
                            <Logout></Logout>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}
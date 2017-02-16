/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';
import SearchComponent from '../views/SearchComponent';
import AddEmployee from '../views/AddEmployee';
import EmployeeList from '../views/EmployeeList';
import {Grid, Row, Col, Button} from 'react-bootstrap';

export default class Leftbar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <div>
                    <Grid>
                        <Row>
                            <Col sm={3} md={3}>
                                <SearchComponent></SearchComponent>
                            </Col>
                            <Col sm={1} md={1}>
                                <AddEmployee></AddEmployee>
                            </Col>
                        </Row>
                    </Grid>

                </div>
                <div>
                    <EmployeeList></EmployeeList>
                </div>
            </div>

        )
    }

}
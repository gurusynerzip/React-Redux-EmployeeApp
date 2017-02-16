/**
 * Created by gurushantu on 09-02-2017.
 */
import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Header from '../components/Header';
import Leftbar from '../components/Leftbar'
import Datacontent from '../components/Datacontent';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {requireSpinner} from '../components/SpinComponent';
import { bindActionCreators } from 'redux';
import * as empActionCreator from '../actions/employee';
//import * as appActionCreator from '../actions/application';

class MainComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
               <Grid>
                   <Row>
                       <Col sm={12} md={12} >
                            <Header></Header>
                       </Col>
                   </Row>
                   <Row>
                       <Col sm={4} md={4}>
                           <Leftbar></Leftbar>
                       </Col>
                       <Col sm={8} md={8} className="pull-right">
                           <Datacontent></Datacontent>
                       </Col>
                   </Row>
                   <Row>
                       <Col sm={12} md={12}>
                           <Footer></Footer>
                       </Col>
                   </Row>
               </Grid>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult,
    isFetching: state.application.isFetching
});

const mapDispatchToProps = (dispatch) => ({
   //appAction: bindActionCreators(appActionCreator, dispatch),
   employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default requireSpinner(connect(mapStateToProps, mapDispatchToProps) (MainComponent));
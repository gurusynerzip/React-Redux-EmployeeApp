/**
 * Created by gurushantu on 13-02-2017.
 */
import React from 'react';
//import autoBind from 'class-autobind';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as empActionCreator from '../actions/employee';
import _ from 'lodash';
import {Form, FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap';

class AddEmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
        //autoBind(this);
        this.state = { };
    }

    handleEmpNumber(e) {
        this.setState({EmployeeNumber: e.target.value});
    }

    handleEmpName(e) {
        this.setState({EmployeeName: e.target.value});
    }

    handleEmpAddress(e) {
        this.setState({City: e.target.value});
    }

    handleSubmit(e) {
        //this.setState({EmployeeNumber: this.refs.empNumber.value, EmployeeName: this.refs.empName.value, City: this.refs.empAddress.value});
        var {employeeActions, employeeResult} = this.props;
        var empData = this.state;
        empData.Id = employeeResult.length + 11;
        employeeActions.addNewEmployee(empData);
        this.setState({EmployeeNumber:'', EmployeeName:'', City:''});
    }

    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Number
                        </Col>
                        <Col sm={4}>
                            <FormControl type="number" ref="empNumber" value={this.state.EmployeeNumber} placeholder="Employee Number" onChange={this.handleEmpNumber.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Name
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" ref="empName" value={this.state.EmployeeName} placeholder="Employee Name" onChange={this.handleEmpName.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Address
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" ref="empAddress" value={this.state.City} placeholder="Employee Address" onChange={this.handleEmpAddress.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={3} sm={4}>
                            <Button bsStyle="primary" onClick={()=> this.handleSubmit()}>
                                ADD
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult,
});

const mapDispatchToProps = (dispatch) => ({
    //appAction: bindActionCreators(appActionCreator, dispatch),
    employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (AddEmployeeDetails);
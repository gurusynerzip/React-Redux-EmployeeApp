/**
 * Created by gurushantu on 13-02-2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'class-autobind';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as empActionCreator from '../actions/employee';
import _ from 'lodash';
import {Form, FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap';

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        // or if you want to bind only only select functions:
        // autoBind(this, 'handleClick');
        this.state = {EmployeeName:'', City:'', Id:'', ifDeletedCss: ''};
    }

    getEmployeeDetailsById() {
        var result = [];
        var {employeeResult} = this.props;
        employeeResult.forEach((Obj) => {if (Obj.Id == this.props.selectedRow) result.push(Obj);} );

        if(result[0] !== undefined) {
            return result[0];
        } else {
            return '';
        }
        //return result? result[0] : null; // or undefined
    }

    handleDelete() {
        var {employeeActions, selectedRow} = this.props;
        employeeActions.deleteEmployee(selectedRow);
        this.setState({ifDeletedCss: 'disabled'});
    }
    
    handleUpdate() {
        var {employeeActions} = this.props;
        employeeActions.updateEmployee(this.state);
        this.setState({EmployeeName:'', Id:'', City:''});
    }

    handleEmpName(e) {
        this.setState({EmployeeName: e.target.value, Id: this.props.selectedRow});
    }

    handleEmpAddress() {
        var val = ReactDOM.findDOMNode(this.refs.empAddress).value;
        this.setState({City: val, Id: this.props.selectedRow});
    }

    render() {
        var empObj = this.getEmployeeDetailsById();

        if(this.state.EmployeeName != '' && empObj != '') {
            empObj.EmployeeName = this.state.EmployeeName;
        }
        if(this.state.City != '' && empObj != '') {
            empObj.City = this.state.City;
        }

        if(empObj == '')
            empObj = {EmployeeName:'', EmployeeNumber:'', City:''};

        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Number
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" value={empObj.EmployeeNumber} placeholder="Employee Number" disabled />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Name
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" value={empObj.EmployeeName} placeholder="Employee Name" onChange={this.handleEmpName} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Employee Address
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" ref="empAddress" value={empObj.City} placeholder="Employee Address"  onChange={this.handleEmpAddress} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={3}></Col>
                        <Col sm={1}>
                            <Button bsStyle="primary" onClick = {this.handleUpdate}>
                                Edit
                            </Button>
                        </Col>
                        <Col sm={3}>
                            <Button bsStyle="danger" onClick={this.handleDelete}>
                                Delete
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
    selectedRow: state.employee.selectedRow
});

const mapDispatchToProps = (dispatch) => ({
    //appAction: bindActionCreators(appActionCreator, dispatch),
    employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeDetails);
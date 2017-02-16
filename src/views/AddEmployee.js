/**
 * Created by gurushantu on 12-02-2017.
 */
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as empActionCreator from '../actions/employee';
import {Button} from 'react-bootstrap';


class AddEmployee extends React.Component {
    constructor() {
        super();
    }

    handleClick() {
        var {employeeActions} = this.props;
        employeeActions.setAddEmpScreen();
    }
    render() {
        return (
            <div >
                <Button bsStyle="primary" onClick={this.handleClick.bind(this)}>+</Button>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult,
    isSelected: state.employee.isSelected,
    selectedRow: state.employee.selectedRow,
    isAddEmpSelected: state.employee.isAddEmpSelected
});

const mapDispatchToProps = (dispatch) => ({
    //appAction: bindActionCreators(appActionCreator, dispatch),
    employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (AddEmployee);
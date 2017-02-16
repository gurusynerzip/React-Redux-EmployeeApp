/**
 * Created by gurushantu on 12-02-2017.
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as empActionCreator from '../actions/employee';


class EmployeeRow extends React.Component {
    constructor() {
        super();
    }

    handleClick(e) {
        console.log(e.target.id);
        var {employeeActions} = this.props;
        employeeActions.setSelectedRowId(e.target.id);
    }

    render() {
        return (
            <tr id={this.props.empId} >
                <td id={this.props.empId} className={this.props.rowCSS} onClick={this.handleClick.bind(this)}>{this.props.empName}</td>
            </tr>
        )
    }

}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult,
    isSelected: state.employee.isSelected,
    selectedRow: state.employee.selectedRow
});

const mapDispatchToProps = (dispatch) => ({
    //appAction: bindActionCreators(appActionCreator, dispatch),
    employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeRow);
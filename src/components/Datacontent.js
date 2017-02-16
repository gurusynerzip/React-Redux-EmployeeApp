/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as empActionCreator from '../actions/employee';
import EmployeeDetails from '../views/EmployeeDetails';
import AddEmployeeDetails from '../views/AddEmployeeDetails';

class Datacontent extends React.Component {

    constructor(props) {
        super(props);
    }

    getComponent() {
        var {isSelected, selectedRow, isAddEmpSelected} = this.props;
        if(isSelected) {
            return (<EmployeeDetails selectedRow = {selectedRow}/> );

        } else {
            if(isAddEmpSelected)
                return ( <AddEmployeeDetails /> );
        }
    }

    render() {

        return (
            <div style={{marginTop: '10%'}}>
                {this.getComponent()}
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

export default connect(mapStateToProps, mapDispatchToProps) (Datacontent);
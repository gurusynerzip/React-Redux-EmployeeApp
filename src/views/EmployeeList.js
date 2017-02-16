/**
 * Created by gurushantu on 12-02-2017.
 */

import React from 'react';
import EmployeeRow from '../views/EmployeeRow';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as empActionCreator from '../actions/employee';
import _ from 'lodash';

class EmployeeList extends React.Component {
    constructor() {
        super();
    }
    
    componentWillMount() {
        var { employeeActions } = this.props;
        employeeActions.getEmployeeList();
    }
    
    getEmployeeRow() {
        var {employeeResult, searchText, selectedRow} = this.props;
        var filteredEmpList = employeeResult;
        var selectedRowCSS = 'selectedRow';
        if(searchText != '') {
            filteredEmpList = _.filter(employeeResult,(employee)=> {
                return employee.EmployeeName.toLowerCase().indexOf(searchText) != -1;
            });
        }

        if(filteredEmpList.length > 0) {
            var rows = _.map(filteredEmpList, (employee) => {
               if(employee.Id == selectedRow) {
                   return (
                       <EmployeeRow rowCSS={selectedRowCSS} empName = {employee.EmployeeName} key={employee.Id} empId = {employee.Id}/>
                   )
               } else {
                   return (
                       <EmployeeRow rowCSS='' empName = {employee.EmployeeName} key={employee.Id} empId = {employee.Id}/>
                   )
               }

            });
        }
        return rows;
    }

    render() {

        return (
            <div style={{float: 'left', marginTop: '15px', width: '100%'}}>
                <Table bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Employee List</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getEmployeeRow()}
                    </tbody>
                </Table>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult,
    searchText: state.employee.searchText,
    isSelected: state.employee.isSelected,
    selectedRow: state.employee.selectedRow
});

const mapDispatchToProps = (dispatch) => ({
    //appAction: bindActionCreators(appActionCreator, dispatch),
    employeeActions: bindActionCreators(empActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeList);
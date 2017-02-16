/**
 * Created by gurushantu on 13-02-2017.
 */
import {REQUEST_SENT,REQUEST_FAIL,EMPLOYEE_DATA_RECEIVED,SET_FILTER, SET_ROW_ID, IS_SELECTED_ROW, ADD_EMP_SELECTED,
    ADD_NEW_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from '../constants';

import _ from 'lodash';


export function getEmployeeList() {
    return dispatch => {
        var dataBlob = [
            {
                EmployeeName: "Guru Upase",
                EmployeeNumber: 1691,
                City: 'Pune',
                Id: 1
            },
            {
                EmployeeName: "Ramesh Pardeshi",
                EmployeeNumber: 1692,
                City: 'Pune',
                Id: 2
            },
            {
                EmployeeName: "Vitthal ",
                EmployeeNumber: 1693,
                City: 'Pune',
                Id: 3
            },
            {
                EmployeeName: "Amit abc",
                EmployeeNumber: 1694,
                City: 'Pune',
                Id: 4
            },
            {
                EmployeeName: "Abhishek xyz",
                EmployeeNumber: 1695,
                City: 'Pune',
                Id: 5
            },
            {
                EmployeeName: "Synerzip Emp",
                EmployeeNumber: 1691,
                City: 'Pune',
                Id: 6
            },
            {
                EmployeeName: "Parag Abc",
                EmployeeNumber: 1696,
                City: 'Pune',
                Id: 7
            },
            {
                EmployeeName: "ABC XYZ",
                EmployeeNumber: 1697,
                City: 'Pune',
                Id: 8
            },
            {
                EmployeeName: "XYZ Upase",
                EmployeeNumber: 1698,
                City: 'Pune',
                Id: 9
            },
            {
                EmployeeName: "ABC Upase",
                EmployeeNumber: 1699,
                City: 'Pune',
                Id: 10
            },
        ];

        dispatch({type: REQUEST_SENT, payload: "Please Wait ..."});

        var interval = setInterval(()=> {
            clearInterval(interval);
            dispatch({type: EMPLOYEE_DATA_RECEIVED, payload: dataBlob});
        }, 1000);
    }
}

export function setFilteredEmpList(searchText) {
    return dispatch => {

            dispatch({
                type: SET_FILTER,
                payload: searchText
            });


    }
}

export function setSelectedRowId(selectedRowId) {
    return dispatch => {
        dispatch({
           type: IS_SELECTED_ROW
        });
        dispatch({
           type:SET_ROW_ID,
           payload: selectedRowId
        });
    }
}

export function setAddEmpScreen() {
    return dispatch => {
        dispatch({
            type: ADD_EMP_SELECTED
        });
    }
}

export function addNewEmployee(empData) {
    return dispatch => {
        dispatch({
           type: ADD_NEW_EMPLOYEE,
           payload: empData
        });
    }
}

export function deleteEmployee(rowId) {
    return dispatch => {
        dispatch({
            type: DELETE_EMPLOYEE,
            payload: rowId
        });
    }
}

export function updateEmployee(empData) {
    return dispatch => {
        dispatch({
           type: UPDATE_EMPLOYEE,
           payload: empData
        });
    }
}

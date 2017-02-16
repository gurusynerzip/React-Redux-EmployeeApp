/**
 * Created by gurushantu on 09-02-2017.
 */
import {EMPLOYEE_DATA_RECEIVED, SET_FILTER, SET_ROW_ID, IS_SELECTED_ROW, ADD_EMP_SELECTED,
    ADD_NEW_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from '../constants';
import _ from 'lodash';

const initialState = {
    employeeResult: [],
    searchText: '',
    isSelected: false,
    selectedRow: null,
    isAddEmpSelected: false
}

export default function employee(state = initialState, action = {}) {
    switch (action.type) {
        case EMPLOYEE_DATA_RECEIVED:
        {
            return Object.assign({}, state, {
                employeeResult: action.payload,
            });
        }
        case SET_FILTER:
        {
           /* var _state = _.cloneDeep(state);
            var searchText = action.payload;
            var filteredEmplList = _state.employeeResult;
            filteredEmplList = _.filter(_state.employeeResult, (employee) => {
               return employee.EmployeeName.toLowerCase().indexOf(searchText) != -1;
            });
            _state.employeeResult = filteredEmplList;
            return _state;*/
            return Object.assign({}, state, {
                searchText: action.payload,
            });
        }
        case IS_SELECTED_ROW:
        {
            return Object.assign({}, state, {
                isSelected: true,
                isAddEmpSelected: false
            });
        }
        case SET_ROW_ID:
        {
            return Object.assign({}, state, {
                selectedRow: action.payload,
            });
        }

        case ADD_EMP_SELECTED:
        {
            return Object.assign({}, state, {
                isAddEmpSelected: true,
                isSelected:false
            });
        }

        case ADD_NEW_EMPLOYEE:
        {
            var _state = _.cloneDeep(state);
            var empData = action.payload;
            _state.employeeResult.push(empData);

            return _state;
        }

        case DELETE_EMPLOYEE:
        {
            var _state = _.cloneDeep(state);
            var Id = action.payload;
            var newArray = _.reject(_state.employeeResult, (employee) => {
               return employee.Id == Id;
            });
            _state.employeeResult = newArray;
            return _state;
        }

        case UPDATE_EMPLOYEE:
        {
            var _state = _.cloneDeep(state);
            var empData = action.payload;

            for(var i=0; i< (_state.employeeResult).length; i++) {
                if(_state.employeeResult[i].Id == empData.Id) {
                    _state.employeeResult[i].EmployeeName = empData.EmployeeName;
                    _state.employeeResult[i].City = empData.City;
                    break;
                }
            }

            console.log(_state);
            //_state.employeeResult = newArray;
            return _state;
        }


        default:
        {
            return state;
        }
    }
}
/**
 * Created by gurushantu on 12-02-2017.
 */

import React from 'react';
import {FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as empActionCreator from '../actions/employee';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleChange(e) {
        var {employeeActions} = this.props;
        console.log(e.target.value);
        this.setState({
            searchText: e.target.value
        });
        employeeActions.setFilteredEmpList(e.target.value);
    }
    render() {
        return (
            <div >
                <FormControl
                    type="text"
                    value={this.state.searchText}
                    placeholder = "Search"
                    onChange = {this.handleChange.bind(this)}
                />

            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps) (SearchComponent);
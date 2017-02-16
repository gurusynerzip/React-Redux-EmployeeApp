/**
 * Created by gurushantu on 09-02-2017.
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class EmployeeCount extends React.Component {
    constructor() {
        super();
    }
    render() {
        var {employeeResult} = this.props;
        if(employeeResult.length > 0 )
            var empCount = employeeResult.length;
        return (
            <div className="pull-right app-emp-count">
                <span style={{color: 'white'}}>Employee Count: {empCount}</span>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    employeeResult: state.employee.employeeResult
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeCount);
/**
 * Created by gurushantu on 13-02-2017.
 */
import React from 'react';
import {connect} from 'react-redux';
//import Spinner from 'react-spinkit';

export function requireSpinner(Component) {
    class SpinComponent extends React.Component {
        render() {
            return (
                <div className="masking">
                    <Component {...this.props} />
                    {
                        this.props.isFetching
                        ?
                            <div className="three-bounce">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        :
                            <div/>
                    }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
       isFetching: state.application.isFetching
    });

    return connect(mapStateToProps) (SpinComponent);
}




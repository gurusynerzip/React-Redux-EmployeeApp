/**
 * Created by gurushantu on 09-02-2017.
 */
import {REQUEST_SENT,REQUEST_FAIL,EMPLOYEE_DATA_RECEIVED} from '../constants';


const initialState = {
    "isFetching": false,
    "loadingMessage": ""
}

export default function application(state = initialState, action = {}) {
    switch(action.type) {
        case REQUEST_SENT:
        {
            return Object.assign({}, state, {
                isFetching:true,
            });
        }
        case REQUEST_FAIL:
        {
            return Object.assign({}, state, {
                isFetching:false,
            });
        }
        case EMPLOYEE_DATA_RECEIVED:
        {
            return Object.assign({}, state, {
                isFetching: false,
            });
        }
        default:{
            return state;
        }
    }
};
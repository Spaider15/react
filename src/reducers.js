/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import { combineReducers } from 'redux'
import { REQUEST_TABLE_DATA, RECIEVE_TABLE_DATA, RECIEVE_TABLE_LOAD_ERROR } from './actions/actionTypes'

const user = (state = {}, action) => {
    switch (action.type){
        case 'LOGIN':
        case 'LOGOUT':
           return action.user;
        case 'REQUEST_AUTH':
            return action.user;
        default :
            return state;
    }
};

const handleTableActions = (state, action) => {
    switch (action.type) {
        case REQUEST_TABLE_DATA:
            return { isFetching: true };
        case RECIEVE_TABLE_DATA:
            return {
                isFetching: false,
                data : action.data
            };
        case RECIEVE_TABLE_LOAD_ERROR:
            return {
                error : true
            };
        default :
            return state
    }
};

const initialTable = {
    isFetching: false,
        error : false,
        data: [],
        filterString: '',
        sortDesc: false,
        sortKey: ''
};

const tableReducer = ( state = initialTable, action ) => {
    return Object.assign({}, state, handleTableActions(state, action))
};

const reducers = combineReducers({
    user,
    table : tableReducer
});

export default reducers
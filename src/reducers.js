/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import { combineReducers } from 'redux'
import { REQUEST_TABLE_DATA, RECIEVE_TABLE_DATA, RECIEVE_TABLE_LOAD_ERROR, FILTER_TABLE_DATA, ACTIVATE_TABLE_ROW, ACTION_ON_MODAL_WINDOW } from './actions/actionTypes'

const initialUser = {
    error : null,
    displayName : "Spaider"
};

const user = (state = initialUser, action) => {
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

const initialTable = {
    isFetching: false,
    error : false,
    data: [],
    filterString: '',
    sortDesc: false,
    sortKey: '',
    editable : false,
    activeRow : null,
    createModalWindow : false,
    editModalWindow : false
};

const handleTableActions = (state, action) => {
    switch (action.type) {
        case ACTION_ON_MODAL_WINDOW:
            return { [action.modal] : action.show };
        case ACTIVATE_TABLE_ROW:
            const editable = action.rowIndex !== null;
            return { activeRow : action.rowIndex, editable: editable };
        case FILTER_TABLE_DATA:
            return { filterString: action.filterString.toLowerCase() };
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

const table = ( state = initialTable, action ) => {
    return Object.assign({}, state, handleTableActions(state, action))
};

const reducers = combineReducers({
    user,
    table
});

export default reducers
/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import { combineReducers } from 'redux'

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

const table = (state = [], action) => {
    switch (action.type) {

    }
};

const reducers = combineReducers({
    user
});

export default reducers
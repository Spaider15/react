/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import fetch from 'isomorphic-fetch'
import { REQUEST_TABLE_DATA, RECIEVE_TABLE_DATA, RECIEVE_TABLE_LOAD_ERROR } from './actionTypes'

export const login = (user) => {
    return {
        type: 'LOGIN',
        user
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT',
        user : {
            isAuthRequired : false,
            error : false
        }
    }
};

function requestAuth(error) {
    return {
        type: 'REQUEST_AUTH',
        user : {
            isAuthRequired : true,
            error : error
        }
    }
}

function authorization(username, password){
    return async dispatch => {
        dispatch(requestAuth(false));
        try {
            const data = await fetch(`http://localhost:8080/auth`);
            const user = await data.json();
            return dispatch(login(user))
        } catch (err) {
            return dispatch(requestAuth(true))
        }

    }
}

export function Auth(username, password) {
    return (dispatch) => {
            return dispatch(authorization(username, password))
    }
}

function recieveTableData(data){
    return {
        type : RECIEVE_TABLE_DATA,
        data
    }
}

function shouldFetchData ({table}) {
    return (!table.data || !table.isFetching)
}

function fetchDispatch() {
    return async (dispatch) => {
        dispatch(REQUEST_TABLE_DATA);
        try {
            const data = await fetch(`http://localhost:8080/table`);
            const table = await data.json();
            return dispatch(recieveTableData(data))
        } catch(err){
            dispatch(RECIEVE_TABLE_LOAD_ERROR);
        }
    }
}

function fetchData () {
    return (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            return dispatch(fetchDispatch())
        }
    }
}
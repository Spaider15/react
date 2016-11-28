/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/26/2016.
 */
import fetch from 'isomorphic-fetch'

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

function requestTable(){
    return {
        type: 'REQUEST_TABLE'
    }
}

export const LoadTables = (table) => {
    return {
        type: 'LOAD_TABLE',
        table
    }
};

function fetchTables(){
    return async dispatch => {
        const data = await fetch(`http://localhost:8080/table`);
        const table = await data.json();
        return dispatch(LoadTables(table))
    }
}

export const GetTables = () => {
    return dispatch => dispatch(fetchTables())
};
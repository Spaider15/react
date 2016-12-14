/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/10/2016.
 */
import { LOGIN, LOGOUT, REQUEST_AUTH, ACTION_SWITCH_TABLE } from './actionTypes'
import fetch from 'isomorphic-fetch'

const authURL = "http://vm37.dev.soft-artel.com/login";

export const login = (user) => {
    return {
        type: LOGIN,
        user
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
        user : {
            isAuthRequired : false,
            error : false
        }
    }
};

function requestAuth(error) {
    return {
        type: REQUEST_AUTH,
        user : {
            isAuthRequired : true,
            error : error
        }
    }
}

function authorization(username, password) {
    return async dispatch => {
        dispatch(requestAuth(false));
        try {
            const data = await fetch(authURL, {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    test : "test",
                    test2 : "test2"
                }),
            });
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

export function switchTable(table){
    return {
        type: ACTION_SWITCH_TABLE,
        table
    }
}

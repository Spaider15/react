/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/10/2016.
 */
import { LOGIN, LOGOUT, REQUEST_AUTH } from './actionTypes'
import fetch from 'isomorphic-fetch'
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

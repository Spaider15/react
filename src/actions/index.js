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
        user : {}
    }
};

function requestAuth() {
    return {
        type: 'REQUEST_AUTH'
    }
}

function authorization(username, password){
    return dispatch => {
        dispatch(requestAuth());
        return fetch(`http://localhost:8080`)
            .then(response => response.json())
            .then(json => dispatch(login(json)))
    }
}

export function Auth(username, password) {
    return (dispatch) => {
            return dispatch(authorization(username, password))
    }
}
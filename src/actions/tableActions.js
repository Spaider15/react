/**
 * Created by Busarov Ivan Spaider629@gmail.com on 12/10/2016.
 */
import fetch from 'isomorphic-fetch'
import { RECIEVE_TABLE_DATA, REQUEST_TABLE_DATA, FILTER_TABLE_DATA, RECIEVE_TABLE_LOAD_ERROR   } from './actionTypes'
function recieveTableData(data, table){
    return {
        type : RECIEVE_TABLE_DATA,
        data,
        table
    }
}

function requestTableData(){
    return {
        type : REQUEST_TABLE_DATA,
    }
}

export function filterBy (filterString) {
    return {
        type: FILTER_TABLE_DATA,
        filterString
    }
}

function recieveLoadError(){
    return {
        type : RECIEVE_TABLE_LOAD_ERROR
    }
}

function shouldFetchData ({table}) {
    return (!table.data || !table.isFetching)
}

function fetchDispatch(table) {
    return async (dispatch) => {
        dispatch(requestTableData());
        try {
            let data = await fetch(`http://localhost:8080/${table}`);
            data = await data.json();
            return dispatch(recieveTableData(data, table))
        } catch(err){
            dispatch(recieveLoadError());
        }
    }
}


export function fetchData (table) {
    return (dispatch, getState) => {
        if (shouldFetchData(getState())) {
            return dispatch(fetchDispatch(table))
        }
    }
}

export default {
    filterBy,
    fetchData
}
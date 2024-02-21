import {types} from "./types";

export function asyncFunctionAction() {
    return function (dispatch){
        setTimeout(() => {
            alert("Hi!")
        }, 2000)
    }
}


function getUser(users){
    return {
        type: types.USER,
        payload: users
    }
}

export function fetchUsers() {
    return async function (dispatch) {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        const newData = data.data
        dispatch(getUser(newData));
    }
}


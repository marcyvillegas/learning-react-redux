import axios from "axios";
import { FETCH_USERS_FAILURE } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";
import { FETCH_USERS_REQUEST } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = user => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// this function will return another function with the use of redux-thunk
export const fetchUsers = () => {

    return async dispatch => {

        dispatch(fetchUsersRequest); // dispatch <- call the action / to trigger the state change

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = response.data;
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    }
}
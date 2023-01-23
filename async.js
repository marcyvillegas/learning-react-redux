import axios from "axios";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// INITIAL STATE
const initialState = {
    loading: false,
    users: [],
    error: ""
}

// ACTIONS
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSucess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Async function
const fetchUsers = () => {
    return async function(dispatch) {

        dispatch(fetchUsersRequest());

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = response.data;
            dispatch(fetchUsersSucess(data.map(user => user.id)));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }

        // Promise version
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(response => {
        //         const user = response.data;
        //         console.log(user)
        //         dispatch(fetchUsersSucess(user));
        //     })
        //     .catch(error => {
        //         dispatch(fetchUsersFailure(error.message));
        //     })
    }
}

// REDUCERS
const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// STORE
const store = createStore(reducer, applyMiddleware(thunk.default));
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers());


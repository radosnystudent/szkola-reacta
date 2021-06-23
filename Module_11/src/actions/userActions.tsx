import { Dispatch } from "redux";
import axios from "axios";

import { Actions } from "../reducers/userReducer";

const getUsers = () => async (dispatch: Dispatch<Actions | Actions>) => {
    try {
        dispatch({
            type: "FETCH_USERS_REQUEST",
        });

        const response = await axios.get(
            "https://randomuser.me/api/?results=10"
        );
        dispatch({
            type: "FETCH_USERS_SUCCESS",
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({
            type: "FETCH_USERS_FAILURE",
            payload: "Nie udało się pobrać danych!",
        });
    }
};

const addUser = () => async (dispatch: Dispatch<Actions | Actions>) => {
    try {
        dispatch({
            type: "FETCH_USERS_REQUEST",
        });
        const response = await axios.get(
            "https://randomuser.me/api/?results=1"
        );
        dispatch({
            type: "FETCH_USERS_ADD_NEW_USER",
            payload: response.data.results[0],
        });
    } catch (error) {
        dispatch({
            type: "FETCH_USERS_FAILURE",
            payload: "Nie udało się pobrać danych!",
        });
    }
};

const resetUsers = () => (dispatch: Dispatch<Actions | Actions>) => {
    dispatch({
        type: "FETCH_USERS_RESET",
    });
};

export { getUsers, resetUsers, addUser };

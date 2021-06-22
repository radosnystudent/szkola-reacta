import { Dispatch } from "redux";
import axios from "axios";

import { Actions } from "../reducers/userReducer";

const getUsers = () => async (dispatch: Dispatch<Actions | Actions>) => {
    try{
        dispatch({
            type: "FETCH_USERS_REQUEST"
        });
        
        const response = await axios.get("https://randomuser.me/api/?results=10");
        // console.log( response.data.results)
        dispatch({
            type: "FETCH_USERS_SUCCESS",
            payload: response.data.results
        })
    } catch(error) {
        dispatch({
            type: "FETCH_USERS_FAILURE",
            payload: "Nie udało się pobrać danych!"
        })
    }
}

export {getUsers};
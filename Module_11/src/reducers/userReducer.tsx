import {StateType} from 'typesafe-actions';
import {Reducer} from "redux";

export type Actions =
    | {type: "FETCH_USERS_REQUEST";}
    | {type: "FETCH_USERS_SUCCESS"; payload: {}}
    | {type: "FETCH_USERS_FAILURE"; payload: string}
    | {type: "FETCH_USERS_RESET";}
    | {type: "FETCH_USERS_ADD_NEW_USER"; payload: {}}

interface userInitialState {
    loading: boolean,
    users: any,
    errors: string
};

type State = userInitialState;

const initialState: userInitialState = {
    loading: false,
    users: [],
    errors: ""
}

const usersReducer: Reducer = (state:State = initialState, action: Actions): State  => {

    switch(action.type){
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case "FETCH_USERS_RESET":
            return {
                ...initialState
            }
        case "FETCH_USERS_ADD_NEW_USER":
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}


export type UserReducer = StateType<typeof usersReducer>;

export default usersReducer;
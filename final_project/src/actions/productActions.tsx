import axios from "axios";
import { Dispatch } from "redux";

import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
} from "../constants/actions";

export const fetchProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });

        const response = await axios.get("/products");

        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            error,
        });
    }
};

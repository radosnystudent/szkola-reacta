import axios from "axios";
import { Dispatch } from "redux";

import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from "../constants/actions";

import { shuffleArray } from "../utilities/auxiliaryFunctions";

export const fetchProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });

        const response = await axios.get("/products");
        const products = response.data.data;
        shuffleArray(products);
        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products,
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            error,
        });
    }
};

export const getProductDetails =
    (productId: string) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: GET_PRODUCT_DETAILS_REQUEST,
            });

            const response = await axios.get(`/product/${productId}`);

            dispatch({
                type: GET_PRODUCT_DETAILS_SUCCESS,
                payload: response.data.data,
            });
        } catch (error) {
            dispatch({
                type: GET_PRODUCT_DETAILS_FAILURE,
                error,
            });
        }
    };

export const getCategories = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get("/categories");

        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            error,
        });
    }
};

import { StateType } from "typesafe-actions";
import { Reducer } from "redux";

export type Actions =
    | { type: "FETCH_PRODUCTS_REQUEST" }
    | { type: "FETCH_PRODUCTS_SUCCESS"; payload: [] }
    | { type: "FETCH_PRODUCTS_FAILURE"; payload: string }
    | { type: "GET_PRODUCT_DETAILS_REQUEST" }
    | { type: "GET_PRODUCT_DETAILS_SUCCESS"; payload: {} }
    | { type: "GET_PRODUCT_DETAILS_FAILURE"; payload: string }
    | { type: "FETCH_CATEGORIES_REQUEST" }
    | { type: "FETCH_CATEGORIES_SUCCESS"; payload: {} }
    | { type: "FETCH_CATEGORIES_FAILURE"; payload: string };

interface productsInitialState {
    loading: boolean;
    products: any;
    product: any;
    error: string;
    categories: any;
}

type State = productsInitialState;

const initialState: productsInitialState = {
    loading: false,
    products: [],
    product: {},
    error: "",
    categories: [],
};

const productReducer: Reducer = (
    state: State = initialState,
    action: Actions
): State => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case "FETCH_PRODUCTS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "GET_PRODUCT_DETAILS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_PRODUCT_DETAILS_SUCCESS":
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case "GET_PRODUCT_DETAILS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case "FETCH_CATEGORIES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return initialState;
    }
};

export type ProductReducer = StateType<typeof productReducer>;

export default productReducer;

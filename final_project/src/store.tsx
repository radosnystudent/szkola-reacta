import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistReducer, persistStore } from "redux-persist";
// import { PersistConfig } from "redux-persist/es/types";
// import storage from "redux-persist/lib/storage";
// import { reducer as formReducer } from "redux-form";

import productReducer from "./reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
});

const initialStates: {} = {
    products: {},
};

// const persistConfig: PersistConfig<any, any, any, any> = {
//     key: "root",
//     storage,
// }

const middleware = [thunk];

const store = createStore(
    reducer,
    initialStates,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;

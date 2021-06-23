import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";

import usersReducer from "./reducers/userReducer";
import messageReducer from "./reducers/messageReducer";

const reducer = combineReducers({
    message: messageReducer,
    users: usersReducer,
});

const initialStates: {} = {
    message: {
        messages: [],
    },
    users: {},
};

const persistConfig: PersistConfig<any, any, any, any> = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
    persistedReducer,
    initialStates,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };

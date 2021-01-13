import { combineReducers, createStore } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { users, loginUser } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "loginUser"]
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    users,
    loginUser,
    form: reduxFormReducer
  })
);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

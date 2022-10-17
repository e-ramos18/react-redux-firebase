import storage from "redux-persist/lib/storage";
import { combineReducers, createStore, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { userReducer } from "../reducers";
import { applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

// Root Reducer
const rootReducer = combineReducers({
  userReducer,
});

// Persistence config
const persistConfig = {
  key: "root",
  storage: storage,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux Store
const Store = () => {
  let reduxStore = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))
  );
  let persister = persistStore(reduxStore);
  return { reduxStore, persister };
};

export default Store;

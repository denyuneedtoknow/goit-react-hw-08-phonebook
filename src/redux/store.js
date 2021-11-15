import contactReducer from "../redux/Contacts/reducers";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);
// export const store = createStore(contactReducer, composeWithDevTools());

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export default { store, persistor };

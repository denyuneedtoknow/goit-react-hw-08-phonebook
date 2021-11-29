
import contactReducer from "../redux/Contacts/contacts-reducers";
import auth from "./Users/users-slice"
import {
  configureStore,
  combineReducers,
  // combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,

} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  }),
];




const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: { auth: persistedReducer, contacts: contactReducer },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

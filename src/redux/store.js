
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
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,

} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const grandReducer = combineReducers({ contacts: contactReducer, auth, },)


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"]
};

const persistedReducer = persistReducer(persistConfig, grandReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);


import contactReducer from "../redux/Contacts/contacts-reducers";
import {
  configureStore,
  // combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: contactReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);

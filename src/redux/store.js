import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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
import { authReducer } from "./slice/authSlice";
import { serviceReducer } from "./slice/serviceSlice";
import { goodsReducer } from "./slice/goodsSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    service: persistReducer(persistConfig, serviceReducer),
    goods: persistReducer(persistConfig, goodsReducer),
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
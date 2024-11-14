import { setupListeners } from "@reduxjs/toolkit/query";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "./auth/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { baseApi } from "../api/baseApi";

// Step 2.1: Create an object to hold the reducers
const reducers = {
  auth: authReducer,
  //   error: errorReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

// Create the persisted reducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

// error handle
const rtkQueryErrorLogger = () => (next) => (action) => {
  if (action.type.endsWith("rejected")) {
    // console.log(action); // Log the rejected action
    if (action.payload?.status === 401) {
      // console.log(action.payload?.data?.message);
      //   next(setErrorInfo("global api error"));
    }
  } else if (action.type.endsWith("fulfilled")) {
    // console.log(action); // Log the fulfilled action
    // next(removeErrorInfo());
    // next(
    //   addErrorInfo({
    //     code: 401,
    //     message: "token expired",
    //   })
    // );
  }

  return next(action);
};
// Step 2.3: Configure the store dynamically
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "base/executeMutation/pending",
          "base/executeMutation/fulfilled",
          "base/executeMutation/rejected",
        ],

        ignoredPaths: ["base.mutations", "base.mutations.error.meta.request"],
      },
    }).concat(baseApi.middleware, rtkQueryErrorLogger),
  devTools: true,
});

setupListeners(store.dispatch);

export const persister = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import {
  combineReducers,
  Dispatch,
  Middleware,
  Reducer,
  ReducersMapObject,
} from "redux";
import { ActionLoadStore, RootAction } from "./actions";
import { AppKey, AppsNamespace } from "./types";

export type RootState = Partial<{
  [key in AppKey]: AppsNamespace[key]["initialState"];
}>;

const initialState: RootState = {};

export function createStore() {
  let reducers: ReducersMapObject<RootState, RootAction> = {};

  const loadAppMiddleware: Middleware<{}, RootState, Dispatch<RootAction>> =
    (storeApi) => (next) => async (action) => {
      if ((action as RootAction).type === "LOAD_STORE") {
        const { storeKey } = action as ActionLoadStore;

        if (Reflect.has(reducers, storeKey)) {
          return;
        }

        const app = (await import(
          `./apps/${storeKey}`
        )) as AppsNamespace[typeof storeKey];

        Reflect.set(reducers, storeKey, app.reducer);

        store.replaceReducer(combineReducers({ ...reducers }));
      }

      return next(action);
    };

  const initialReducer: Reducer<RootState, RootAction> = () => initialState;

  const store = configureStore<
    RootState,
    RootAction,
    [typeof loadAppMiddleware]
  >({
    middleware: [loadAppMiddleware],
    preloadedState: initialState,
    reducer: initialReducer,
  });

  return { store };
}

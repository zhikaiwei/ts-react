import {
  Reducer,
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
  ReducersMapObject
} from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { ReducerKey } from "../enums/reducerKey";
import { history } from "./history";

const reducers: ReducersMapObject = {
  [ReducerKey.Router]: connectRouter(history)
};

export const store = createStore(
  combineReducers(reducers),
  undefined,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

/**
 * has reducer
 * @param key ReducerKey
 */
export function hasReducer(key: ReducerKey): boolean {
  if (typeof reducers[key] !== "undefined") {
    return true;
  }
  return false;
}

/**
 * inject reducer
 * @param key ReducerKey
 * @param reducer Reducer
 * @param replace boolean
 */
export function injectReducer(
  key: ReducerKey,
  reducer: Reducer,
  replace: boolean = false
): void {
  if (typeof reducers[key] === "undefined" || replace === true) {
    reducers[key] = reducer;
    store.replaceReducer(combineReducers(reducers));
  }
}

/**
 * remove reducer
 * @param key string
 */
export function removeReducer(key: string): void {
  if (typeof reducers[key] !== "undefined") {
    delete reducers[key];
    store.replaceReducer(combineReducers(reducers));
  }
}

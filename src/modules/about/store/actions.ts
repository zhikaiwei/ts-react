import { State } from "./reducer";
import {
  UpdateStateAction,
  UPDATE_STATE,
  ResetStateAction,
  RESET_STATE
} from "./actionTypes";

/**
 * reset state
 * @param param State
 */
export function resetStateAction(param?: State): ResetStateAction {
  return {
    type: RESET_STATE,
    payload: param
  };
}

/**
 * update state
 * @param param Partial<State>
 */
export function updateStateAction(param: Partial<State>): UpdateStateAction {
  return {
    type: UPDATE_STATE,
    payload: param
  };
}

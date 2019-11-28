import { ActionType } from "../enums/actionType";
import { State } from "./reducer";

export interface ResetStateAction {
  type: ActionType.App_ResetState;
  payload?: State;
}

export interface UpdateStateAction {
  type: ActionType.App_UpdateState;
  payload: Partial<State>;
}

export type Actions = ResetStateAction | UpdateStateAction;

/**
 * reset state
 * @param param State
 */
export function resetStateAction(param?: State): ResetStateAction {
  return {
    type: ActionType.App_ResetState,
    payload: param
  };
}

/**
 * update state
 * @param param Partial<State>
 */
export function updateStateAction(param: Partial<State>): UpdateStateAction {
  return {
    type: ActionType.App_UpdateState,
    payload: param
  };
}

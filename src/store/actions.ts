import { ActionType } from "../enums/actionType";
import { State, Tab } from "./reducer";

export interface ResetStateAction {
  type: ActionType.App_ResetState;
  payload?: State;
}

export interface UpdateStateAction {
  type: ActionType.App_UpdateState;
  payload: Partial<State>;
}
export interface AddTabAction {
  type: ActionType.App_AddTab;
  payload: Tab;
}

export type Actions = ResetStateAction | UpdateStateAction | AddTabAction;

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

/**
 * add tab action
 * @param param Tab
 */
export function addTabAction(param: Tab): AddTabAction {
  return {
    type: ActionType.App_AddTab,
    payload: param
  };
}

import { ActionType } from "../../../enums/actionType";
import { HomeState } from "./reducer";

interface StateAction {
  type: typeof ActionType.Home_UpdateState;
  payload: HomeState;
}

export type Actions = StateAction;

/**
 * 更新筛选框状态
 * @param param
 */
export function updateStateAction(param: HomeState): StateAction {
  return {
    type: ActionType.Home_UpdateState,
    payload: param
  };
}

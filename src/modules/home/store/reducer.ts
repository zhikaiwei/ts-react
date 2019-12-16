import { ActionType } from "../../../enums/actionType";
import { Actions } from "./actions";

export interface HomeState {
  stateSelected: number;
}

export interface State extends HomeState {}

/**
 * 初始化
 */
const getInitialState: () => State = () => {
  return {
    stateSelected: 0
  };
};

export function reducer(state = getInitialState(), action: Actions): State {
  switch (action.type) {
    case ActionType.Home_UpdateState:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

import { ObjectUtils } from "ts-commons";
import { ActionType } from "../enums/actionType";
import { Actions } from "./actions";

export interface State {}

export const getInitialState: () => State = () => ({});

export function reducer(state = getInitialState(), action: Actions): State {
  switch (action.type) {
    case ActionType.App_ResetState: {
      return ObjectUtils.getOrDefault(action.payload, getInitialState());
    }
    case ActionType.App_UpdateState: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}

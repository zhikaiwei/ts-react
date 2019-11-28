import { ObjectUtils } from "ts-commons";
import { ActionTypes, RESET_STATE, UPDATE_STATE } from "./actionTypes";

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case RESET_STATE:
      return ObjectUtils.getOrDefault(action.payload, initialState);
    case UPDATE_STATE:
      return Object.assign({}, state, { ...action.payload });

    default: {
      return state;
    }
  }
}

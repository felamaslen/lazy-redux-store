import type { Reducer } from "redux";
import type { RootAction } from "../../actions";

export const initialState = {
  stateB: 1,
};

export type State = typeof initialState;

export const reducer: Reducer<State, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ACTION_B":
      return {
        ...state,
        stateB: state.stateB + 1,
      };
    case "ACTION_C":
      return {
        ...state,
        stateB: 0,
      };
    default:
      return state;
  }
};

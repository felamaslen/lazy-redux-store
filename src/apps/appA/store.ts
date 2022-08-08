import type { Reducer } from "redux";
import type { RootAction } from "../../actions";

export const initialState = {
  stateA: "foo",
};

export type State = typeof initialState;

export const reducer: Reducer<State, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ACTION_A":
      return {
        ...state,
        stateA: `${state.stateA}${state.stateA.length}`,
      };
    case "ACTION_C":
      return {
        ...state,
        stateA: "bar",
      };
    default:
      return state;
  }
};

import { AppKey } from "./types";

export const actionA = () => ({
  type: "ACTION_A",
});
export type ActionA = ReturnType<typeof actionA>;

export const actionB = () => ({
  type: "ACTION_B",
});
export type ActionB = ReturnType<typeof actionB>;

export const actionC = () => ({
  type: "ACTION_C",
});
export type ActionC = ReturnType<typeof actionC>;

export const actionLoadStore = (storeKey: AppKey) => ({
  type: "LOAD_STORE",
  storeKey,
});
export type ActionLoadStore = ReturnType<typeof actionLoadStore>;

export type RootAction = ActionA | ActionB | ActionC | ActionLoadStore;

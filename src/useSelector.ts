import { useSelector as useSelectorDefault } from "react-redux";

import type { RootState } from "./store";

export const useSelector = <T>(selector: (state: RootState) => T | undefined) =>
  useSelectorDefault<RootState, T | undefined>(selector);

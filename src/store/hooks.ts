import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type RootState from "../types/Store/RootState";
import type DispatchFunction from "../types/Store/DispatchFunction";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch: DispatchFunction = useDispatch;

import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import type RootState from "../types/store/RootState";
import type DispatchFunction from "../types/store/DispatchFunction";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch: DispatchFunction = useDispatch;

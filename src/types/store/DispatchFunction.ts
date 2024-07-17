import { store } from "../../store/store";

type AppDispatch = typeof store.dispatch;
type DispatchFunction = () => AppDispatch;
export default DispatchFunction;

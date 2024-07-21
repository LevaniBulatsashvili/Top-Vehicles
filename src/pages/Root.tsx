import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "../store/store";
import Header from "../components/Header";

export default function Root() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

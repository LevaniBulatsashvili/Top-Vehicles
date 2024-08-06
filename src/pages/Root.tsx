import { Provider } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "../store/store";
import Header from "../components/Header";
import { useStoreSelector } from "../store/hooks";

export function ProtectedRoutes() {
  const user = useStoreSelector((state) => state.user.user);

  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default function Root() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { ProtectedRoutes } from "./pages/Root";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import VehichlePage from "./pages/Vehicle";
import UserPage from "./pages/User";
import UserVehiclePage from "./pages/UserVehicle";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "vehicle/:id", element: <VehichlePage /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "user", element: <UserPage /> },
          { path: "user/vehicle", element: <UserVehiclePage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

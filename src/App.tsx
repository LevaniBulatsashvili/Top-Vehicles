import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import VehichlePage from "./pages/Vehicle";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "auth", element: <AuthPage /> },
      { path: "vehicle/:id", element: <VehichlePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

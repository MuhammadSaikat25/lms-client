import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hell</div>,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

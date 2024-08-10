import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      
    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

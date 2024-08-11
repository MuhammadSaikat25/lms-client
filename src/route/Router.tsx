import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

import Adminlayout from "../layout/Adminlayout";
import AdminHero from "../components/admin/AdminHero";
import Users from "../pages/admin/Users";
import CreateCourse from "../pages/admin/create-course/CreateCourse";
import UseAdminProtected from "../hooks/UseAdminProtected";
import AllCourses from "../pages/admin/all-courses/AllCourses";
import EditCourse from "../pages/admin/edit-course/EditCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHero />,
      },
      {
        path: "/admin/users",
        element: (
          <UseAdminProtected>
            <Users />
          </UseAdminProtected>
        ),
      },
      {
        path:"/admin/all-courses",
        element:<AllCourses/>
      },
      {
        path: "/admin/create-course",
        element: <CreateCourse />,
      },
      {
        path:"/admin/edit-course/:id",
        element:<EditCourse/>
      }
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

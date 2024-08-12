import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

import Adminlayout from "../layout/Adminlayout";
import AdminHero from "../components/admin/AdminHero";
import Users from "../pages/admin/all-users/Users";
import CreateCourse from "../pages/admin/create-course/CreateCourse";
import UseAdminProtected from "../hooks/UseAdminProtected";
import AllCourses from "../pages/admin/all-courses/AllCourses";
import EditCourse from "../pages/admin/edit-course/EditCourse";
import ManageUser from "../pages/admin/manage-users/ManageUser";
import Faq from "../pages/admin/faq/Faq";
import CourseAnalytics from "../pages/admin/course-analytics/CourseAnalytics";
import OrderAnalytics from "../pages/admin/order-analytics/OrderAnalytics";
import UserAnalytics from "../pages/admin/user-analytics/UserAnalytics";

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
    element: (
      <UseAdminProtected>
        <Adminlayout />
      </UseAdminProtected>
    ),
    children: [
      {
        path: "/admin",
        element: (
          <UseAdminProtected>
            <AdminHero />
          </UseAdminProtected>
        ),
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
        path: "/admin/all-courses",
        element: (
          <UseAdminProtected>
            <AllCourses />
          </UseAdminProtected>
        ),
      },
      {
        path: "/admin/create-course",
        element: (
          <UseAdminProtected>
            <CreateCourse />
          </UseAdminProtected>
        ),
      },
      {
        path: "/admin/edit-course/:id",
        element: (
          <UseAdminProtected>
            <EditCourse />
          </UseAdminProtected>
        ),
      },
      {
        path: "/admin/manage-team",
        element: (
          <UseAdminProtected>
            <ManageUser />
          </UseAdminProtected>
        ),
      },
      {
        path: "/admin/faq",
        element: <Faq />,
      },
      {
        path: "/admin/course-analytics",
        element: <CourseAnalytics />,
      },
      {
        path: "/admin/order-analytics",
        element: <OrderAnalytics />,
      },
      {
        path: "/admin/user-analytics",
        element: <UserAnalytics />,
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

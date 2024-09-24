import { Link, NavLink, useLocation } from "react-router-dom";
import defaultAvatar from "../../assets/avatarD.jpg";
import { FaUsers } from "react-icons/fa";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const AdminHeader = ({ open, setOpen }: Props) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpen(false);
      }
    }
  };
  const location = useLocation();

  return (
    <div className="text-left">
      <div className="hidden lg:block lg:bg-[#170F21] lg:h-svh w-full text-white">
        <div className="hidden bg-[#170F21] h-full overflow-scroll pt-4 overflow-y-auto overflow-x-hidden lg:flex flex-col items-center">
          <img
            src={user?.avatar || defaultAvatar}
            className="mx-auto  rounded-full h-[70px] w-[70px]"
            alt="image"
          />

          <Link to={"/"}>Home</Link>
          <div className="flex flex-col gap-3">
            <NavLink
              className={`${
                location.pathname === "/admin" && "text-gradient2"
              }`}
              to={"/admin"}
            >
              Dashboard
            </NavLink>
            {/* ------------- Data ------------ */}
            <div className="flex flex-col gap-1">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-[#FF7F3E]" : ""}`
                }
                to="/admin/users"
              >
                <span>
                  <FaUsers
                    className={`${
                      location.pathname === "/admin/users" && "text-[#FF7F3E]"
                    }`}
                  />
                </span>
                <span>Users</span>
              </NavLink>

              <Link to={"/admin/invoice"}>Invoice</Link>
            </div>
            {/* ---------  Content ------------- */}
            <div className="">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to="/admin/create-course"
              >
                Create Course
              </NavLink>
            </div>
            <div className="">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/all-courses"}
              >
                All Courses
              </NavLink>
            </div>
            {/* ---------- Controllers */}
            <div className="flex flex-col gap-3">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/manage-team"}
              >
                Manage User
              </NavLink>
            </div>
            {/* --------------- Customization ------------ */}
            <div className="flex flex-col gap-3">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/faq"}
              >
                FAQ
              </NavLink>
            </div>
            {/* Analytics */}
            <div className="flex flex-col gap-3">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/course-analytics"}
              >
                Course-analytics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/order-analytics"}
              >
                Order-analytics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-gradient2" : ""}`
                }
                to={"/admin/user-analytics"}
              >
                User-analytics
              </NavLink>
            </div>
          </div>
        </div>
        {/* ---------------------mobile ----------------------- */}
      </div>
      {open && (
        <div
          onClick={handelClose}
          className="fixed w-full h-screen top-0 z-[99999] lg:hidden"
          id="screen"
        >
          <div className="w-[50%] fixed z-[999999999] h-screen bg-[#170F21] text-white p-2  top-0 right-0 ">
            <div className="flex flex-col w-fit mx-auto  gap-3">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink
                className={`${
                  location.pathname === "/admin" && "text-gradient2"
                }`}
                to={"/admin"}
              >
                Dashboard
              </NavLink>
              {/* ------------- Data ------------ */}
              <div className="flex flex-col gap-1">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-[#FF7F3E]" : ""
                    }`
                  }
                  to="/admin/users"
                >
                  <span>
                    <FaUsers
                      className={`${
                        location.pathname === "/admin/users" && "text-[#FF7F3E]"
                      }`}
                    />
                  </span>
                  <span>Users</span>
                </NavLink>

                <Link to={"/admin/invoice"}>Invoice</Link>
              </div>
              {/* ---------  Content ------------- */}
              <div className="">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to="/admin/create-course"
                >
                  Create Course
                </NavLink>
              </div>
              <div className="">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/all-courses"}
                >
                  All Courses
                </NavLink>
              </div>
              {/* ---------- Controllers */}
              <div className="flex flex-col gap-3">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/manage-team"}
                >
                  Manage User
                </NavLink>
              </div>
              {/* --------------- Customization ------------ */}
              <div className="flex flex-col gap-3">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/faq"}
                >
                  FAQ
                </NavLink>
              </div>
              {/* Analytics */}
              <div className="flex flex-col gap-3">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/course-analytics"}
                >
                  Course-analytics
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/order-analytics"}
                >
                  Order-analytics
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-gradient2" : ""}`
                  }
                  to={"/admin/user-analytics"}
                >
                  User-analytics
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;

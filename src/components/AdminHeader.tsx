import { Link } from "react-router-dom";
import defaultAvatar from "../assets/defaultAvaTar.png";
import { useState } from "react";
import Nav from "../shared/Nav";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const AdminHeader = ({ open, setOpen }: Props) => {
  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpen(false);
      }
    }
  };
  return (
    <div className="">
      <div className="hidden lg:block lg:bg-[#170F21] lg:h-screen w-full text-white">
        <div className="hidden bg-[#170F21] h-full overflow-scroll overflow-y-auto overflow-x-hidden lg:flex flex-col items-center">
          <img
            src={defaultAvatar}
            width={100}
            height={100}
            className="mx-auto"
            alt=""
          />
          <h1>Saikat</h1>
          <Link to={"/"}>Home</Link>
          <h1>Admin</h1>

          <div className="flex flex-col gap-3">
            <Link to={"/admin"}>Dashboard</Link>
            {/* ------------- Data ------------ */}
            <div className="">
              <h1>Data</h1>
              <div className="flex flex-col gap-1">
                <Link to={"/admin/users"}>Users</Link>
                <Link to={"/admin/lnvoice"}>Invoice</Link>
              </div>
            </div>
            {/* ---------  Content ------------- */}
            <div className="">
              <h1>Content</h1>
              <div className="">
                <Link to={"/admin/create-course"}>Create Course</Link>
              </div>
              <div className="">
                <Link to={"/admin/courses"}>All Courses</Link>
              </div>
            </div>
            {/* ---------- Controllers */}
            <div className="">
              <h1>Controllers</h1>
              <div className="flex flex-col gap-3">
                <Link to={"/admin/manage-team"}>Manage Team</Link>
              </div>
            </div>
            {/* --------------- Customization ------------ */}
            <div className="flex flex-col gap-3">
              <Link to={"/admin/hero"}>Hero</Link>
              <Link to={"/admin/faq"}>FAQ</Link>
              <Link to={"/"}>categories</Link>
            </div>
            {/* Analytics */}
            <div className="flex flex-col gap-3">
              <Link to={"/admin/course-analytics"}>Course-analytics</Link>
              <Link to={"/admin/order-analytics"}>Order-analytics</Link>
              <Link to={"/admin/user-analytics"}>User-analytics</Link>
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
          <div className="w-[50%] fixed z-[999999999] h-screen bg-[#170F21]  p-2  top-0 right-0">
            <div className="text-white">
              <img
                src={defaultAvatar}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h1>Saikat</h1>
              <Link to={"/"}>Home</Link>
              <h1>Admin</h1>

              <div className="flex flex-col gap-3">
                <h1>Dashboard</h1>
                {/* ------------- Data ------------ */}
                <div className="">
                  <h1>Data</h1>
                  <div className="">
                    <h1>User</h1>
                    <h1>Invoice</h1>
                  </div>
                </div>
                {/* ---------  Content ------------- */}
                <div className="">
                  <h1>Content</h1>
                  <div className="">
                    <Link to={"/admin/create-course"}>Create Course</Link>
                    <h1>Live Course</h1>
                  </div>
                </div>
                {/* --------------- Customization ------------ */}
                <div className="flex flex-col gap-3">
                  <Link to={"/"}>Hero</Link>
                  <Link to={"/"}>FAQ</Link>
                  <Link to={"/"}>categories</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;

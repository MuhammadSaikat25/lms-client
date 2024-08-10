import { Link, Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import logo from "../assets/ph_logo.png";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Adminlayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="lg:h-screen lg:w-[10%]">
        <AdminHeader setOpen={setOpen} open={open} />
        <div className=" bg-[#100829] flex justify-between items-center lg:hidden">
          <Link to={"/"} className="flex items-center">
            <img src={logo} width={50} height={50} alt="image" />
            <h1 className="text-white">Coding Hero</h1>
          </Link>
          <CiMenuFries color="white" size={30} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div className="bg-[#010313] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Adminlayout;

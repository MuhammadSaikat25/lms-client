import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/ph_logo.png";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  const [openSidebar, setOpeSideBar] = useState(false);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpeSideBar(false);
      }
    }
  };
  return (
    <div
      className="w-full relative text-white"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <div className="">
        <div className="p-6 flex items-center justify-between lg:px-[160px]">
          <Link to={"/"} className="flex items-center">
            <img src={logo} width={50} height={50} alt="image" />
            <h1>Coding Hero</h1>
          </Link>
          <div className="lg:flex items-center gap-3">
            <Nav isMobile={false} />
            {!user && (
              <div className="flex gap-4">
                <Link to={'/login'}>login</Link>
                <Link to={'/register'}>Register</Link>
              </div>
            )}
            <div className="lg:hidden">
              <CiMenuFries
                color="white"
                size={30}
                onClick={() => setOpeSideBar(true)}
              />
            </div>
            <div className="hidden 800px:block">
              {/* {user && (
                <CgProfile
                  className="cursor-pointer"
                  size={20}
                  onClick={() => router.push("/Profile")}
                />
              )} */}
            </div>
          </div>
        </div>

        {/* --------------- mobile sidebar -------------  */}
        {openSidebar && (
          <div
            onClick={handelClose}
            className="fixed w-full h-screen top-0 z-[99999] 800px:hidden"
            id="screen"
          >
            <div className="w-[50%] fixed z-[999999999] h-screen bg-[#2E2960]  top-0 right-0">
              <Nav isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

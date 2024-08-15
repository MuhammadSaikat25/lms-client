import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/ph_logo.png";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { CgProfile } from "react-icons/cg";
import Profile from "./Profile";

const Header = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const webName = "<Coding/> Hero";
  const [openSidebar, setOpeSideBar] = useState(false);
  const [profile, setProfile] = useState<boolean>(false);

  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpeSideBar(false);
      }
    }
  };

  return (
    <div className="w-full relative text-white bg-[#100829] border-b border-[#0A73DB] border-opacity-15">
      <div className="">
        <div className="p-6 flex items-center justify-between lg:px-[160px]">
          <Link to={"/"} className="flex items-center">
            <img src={logo} width={50} height={50} alt="image" />
            <h1 className="webName">{webName}</h1>
          </Link>
          <div className="lg:flex items-center gap-3">
            <Nav profile={profile} setProfile={setProfile} isMobile={false} />
            {user ? (
              <NavLink onClick={()=>setProfile(false)} className={"hidden lg:block"} to={"/my-class"}>My Class</NavLink>
            ) : (
              <div className="flex gap-4">
                <Link to={"/login"}>login</Link>
                <Link to={"/register"}>Register</Link>
              </div>
            )}
            <div className="lg:hidden">
              <CiMenuFries
                color="white"
                size={30}
                onClick={() => setOpeSideBar(true)}
              />
            </div>
            <div className="hidden lg:block">
              {user && (
                <CgProfile
                  className="cursor-pointer"
                  size={20}
                  onClick={() => setProfile(!profile)}
                />
              )}
            </div>
          </div>
        </div>
        {profile && (
          <div
            className={`absolute lg:right-[0%] bg-[#100829] top-[80px]
      border-t border-l border-b
      rounded-bl-xl rounded-tl-xl px-20 py-20 border-blue-500 z-40`}
          >
            <Profile profile={profile} setProfile={setProfile} />
          </div>
        )}

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

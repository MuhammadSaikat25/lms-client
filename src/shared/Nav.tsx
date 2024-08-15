import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  isMobile: boolean;
};

type NavLinkType = {
  name: string;
  path: string;
};

const NavLinkData: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "Course", path: "/course" },
  { name: "About", path: "/about" },
  { name: "Police", path: "/police" },
];

const Nav: FC<Props> = ({ isMobile }) => {
  return (
    <>
      <div className="hidden lg:block text-white ">
        <div className="flex">
          {NavLinkData.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 ${isActive ? "text-red-500" : ""}`
                }
              >
                <span>{item.name}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------- mobile ------------------ */}
      {isMobile && (
        <div className="lg:hidden mt-5">
          <div className="w-full text-center flex flex-col gap-8 py-6">
            {NavLinkData.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : ""}`
                }
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-[#080826]">
      <div className="">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;

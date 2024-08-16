import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-svh justify-between bg-[#010313]">
      <div className="">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;

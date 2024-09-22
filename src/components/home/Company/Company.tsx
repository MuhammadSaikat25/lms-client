import google from "../../../assets/google.jpg";
import amazon from "../../../assets/amazon.webp";
import facebook from "../../../assets/fb.png";
import ms from "../../../assets/ms.webp";
import "./c.css";

const Company = () => {
  return (
    <div className="company pt-[200px] pb-[100px] w-full">
      <p className="text-center text-white text-3xl py-10">
        Heroes in top companies_
      </p>
      <div className="grid grid-cols-2 gap-5 w-[80%] mx-auto">
        {/* ------------------- */}
        <div className="image-container bg-gray-900 hover:bg-[#2C7A56] rounded-md px-10 py-4 flex items-center w-[100%] justify-between">
          <h1 className="text-white text-[20px]">Google</h1>
          <img src={google} className="rounded-md " alt="Company" />
        </div>
        {/* ------------------------ */}
        <div className="image-container bg-gray-900 hover:bg-[#2C7A56] rounded-md px-10 py-4 flex items-center w-[100%] justify-between">
          <h1 className="text-white text-[20px]">Amazon</h1>
          <img src={amazon} className="rounded-md " alt="Company" />
        </div>
        {/* -------------------- */}
        <div className="image-container bg-gray-900 hover:bg-[#2C7A56] rounded-md px-10 py-4 flex items-center w-[100%] justify-between">
          <h1 className="text-white text-[20px]">Facebook</h1>
          <img src={facebook} className="rounded-md " alt="Company" />
        </div>
        <div className="image-container bg-gray-900 hover:bg-[#2C7A56] rounded-md px-10 py-4 flex items-center w-[100%] justify-between">
          <h1 className="text-white text-[20px]">Microsoft</h1>
          <img
            src={ms}
            className="rounded-md bg-white h-[10px]"
            alt="Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;

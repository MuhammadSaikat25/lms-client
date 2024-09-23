import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import ai from "../../../assets/ai.json";
import message from "../../../assets/message.json";
import global from "../../../assets/global.json";
import success from "../../../assets/ladder.json";

const Card = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scroll)
  return (
    <div className="flex flex-col ">
      <div className="w-fit mx-auto p-4">
        {/* -------------------------   ZERO TO CAREER -------------------- */}
        <div
          className={`lg:w-[880px] flex-col md:flex md:flex-row my-11 ${
            scroll > 1384 ? "sticky top-[100px] z-10 " : ""
          }`}
        >
          <div className="bg-[#163580] p-14 rounded-tr-xl md:rounded-tr-none rounded-br-xl md:rounded-br-none rounded-tl-xl rounded-bl-xl">
            <div className="mt-3">
              <p className="text-white text-[20px] font-semibold">
                ZERO TO CAREER
              </p>
              <p className="text-white">
                You will{" "}
                <span className="bg-orange-500 p-1 rounded-md">
                  get everything
                </span>{" "}
                from the beginning of your <br /> journey until you get an
                internship or a full-time job.
              </p>
            </div>
          </div>
          <div className="bg-white px-20 rounded-tr-xl rounded-br-xl">
            <Lottie
              animationData={success}
              className="hidden md:block"
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>

        {/* ---------------------- JOB/INTERN GUARANTEE? --------------------- */}
        <div
          className={` lg:w-[880px] flex-col md:flex md:flex-row my-11 ${
            scroll > 1544 && "sticky top-[150px] z-20 "
          } md:${scroll > 2400 ? "sticky top-[150px] z-20 " : ""}`}
        >
          <div className="bg-[#42BD8A] p-14 rounded-tr-xl md:rounded-tr-none rounded-br-xl md:rounded-br-none rounded-tl-xl rounded-bl-xl">
            <h1 className="text-[#1B1456] text-[20px] font-semibold">
              JOB/INTERN GUARANTEE?
            </h1>
            <div className="mt-3">
              <div className="text-[#1B1456] py-1">
                <p>
                  We{" "}
                  <span className="bg-[#1B1456] text-white p-1 rounded-md">
                    Guarantee
                  </span>{" "}
                  a job/internship for those who finish
                </p>
                <p className=" py-2">
                  the main course and{" "}
                  <span className="bg-[#1B1456] text-white p-1 rounded-md ">
                    SCIC on time.
                  </span>{" "}
                  And then keep
                </p>
                <p>
                  working with our{" "}
                  <span className="bg-[#1B1456] text-white p-1 rounded-md">
                    job placement team.
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white px-20 rounded-tr-xl rounded-br-xl">
            <Lottie
              className="hidden md:block"
              animationData={global}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>

        {/* ------------- UNLIMITED LIVE SUPPORT ------------ */}
        <div
          className={`lg:w-[880px] flex-col md:flex md:flex-row my-11 ${
            scroll > 1784 && "sticky top-[200px] z-30 "
          } md:${scroll > 2567 ? "sticky top-[200px] z-30 " : ""}`}
        >
          <div className="bg-[#611879] p-14 rounded-tr-xl md:rounded-tr-none rounded-br-xl md:rounded-br-none rounded-tl-xl rounded-bl-xl">
            <div className="mt-3">
              <p className="text-white text-[20px] font-semibold">
                UNLIMITED LIVE SUPPORT
              </p>
              <div className="text-white">
                <p>
                  You can Join one to{" "}
                  <span className="bg-[#FFCD19] text-gray-900 rounded-tl-md rounded-bl-md p-1">
                    one live support sessions three
                  </span>
                </p>
                <p className="py-2">
                  <span className="bg-[#FFCD19] text-gray-900 md:rounded-tr-md rounded-br-xl md:rounded-br-md p-1">
                    times a day.
                  </span>{" "}
                  It is guaranteed{" "}
                  <span className="bg-[#FFCD19] text-gray-900 p-1 rounded-md">
                    to get answers to
                  </span>
                </p>
                <p className="">
                  every question within 10 hours.
                  <span className="bg-[#FFCD19] text-gray-900 rounded-tr-md  rounded-br-md p-1">
                    within 10 hours.
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white px-20 rounded-tr-xl rounded-br-xl">
            <Lottie
              className="hidden md:block"
              animationData={message}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        {/* ------------------ Personalized Learning Using AI ----------------- */}
        <div
          className={`lg:w-[880px] flex-col md:flex md:flex-row my-11 ${
            scroll > 2024 && "sticky top-[250px] z-40"
          } md:${scroll > 3154 ? "sticky top-[250px] z-40" : ""}`}
        >
          <div className="bg-[#FCCA53] p-14 rounded-tr-xl md:rounded-tr-none rounded-br-xl md:rounded-br-none rounded-tl-xl rounded-bl-xl">
            <h1 className="text-[#1B1456] text-[20px] font-semibold">
              Personalized Learning Using AI
            </h1>
            <div className="text-[#1B1456]">
              <p>
                Unlock your future potential with our{" "}
                <span className="bg-[#E43D3D] p-1 rounded-md">AI-powered,</span>
              </p>
              <p className="py-2">
                data-driven, mentor-supported{" "}
                <span className="rounded-tl-md rounded-bl-md p-1 bg-[#E43D3D]">
                  personalized learning
                </span>
              </p>
              <p className=" rounded-tr-md  rounded-br-md p-1 bg-[#E43D3D] w-fit">
                path.
              </p>
            </div>
          </div>
          <div className="bg-white px-20 rounded-tr-xl rounded-br-xl">
            <Lottie
              className="hidden md:block"
              animationData={ai}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>

        {/* --------------------- International Remote Jobs ---------------- */}
        <div
          className={`lg:w-[880px] flex-col md:flex md:flex-row my-11 ${
            scroll > 2264 && "sticky top-[300px] z-50 "
          } md:${scroll > 3354 ? "sticky top-[300px] z-50 " : ""}`}
        >
          <div className="bg-[#3E1D9A] p-14 rounded-tr-xl md:rounded-tr-none rounded-br-xl md:rounded-br-none rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white text-[20px] font-semibold">
              International Remote Jobs
            </h1>
            <div className="mt-3">
              <p className="text-white">
                After learning, join{" "}
                <span className="bg-orange-500 p-1 rounded-md">
                  remote jobs/internships
                </span>{" "}
                alongside
              </p>
              <p className="text-white py-2">
                our studies—{" "}
                <span className="bg-orange-500 p-1 rounded-md">
                  1,600+ students
                </span>{" "}
                hired in 57 countries!
              </p>
            </div>
          </div>
          <div className="bg-white  px-20 rounded-tr-xl rounded-br-xl">
            <Lottie
              className="hidden md:block"
              animationData={global}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

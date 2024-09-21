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
  return (
    <div className="relative flex bg-[#604CC3] ">
      <div
        className={`w-full p-4 ${
        scroll > 1799 ? "bg-red-700  top-0 w-full z-50" : ""
        }`}
      >
        {/* ----------------- CAREER ---------------- */}
        <div className={`w-full flex my-11 ${
        scroll > 1799 ? "fixed top-[1799px] w-full z-[199]" : ""
        }`}>
          <div className="bg-[#163681] p-14 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white">ZERO TO CAREER</h1>
            <div className="mt-3">
              <p className="text-white">ZERO TO CAREER</p>
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
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        {/* ------------------------- JOB/INTERN GUARANTEE? ------------------ */}
        <div
          className={`w-full flex my-11 transition-transform duration-700 ease-in-out ${
            Math.round(scroll) > 2399 ? "translate-y-[-80px] z-40" : ""
          }`}
        >
          <div className="bg-[#c9cfdb] p-14 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white">ZERO TO CAREER</h1>
            <div className="mt-3">
              <p className="text-white">ZERO TO CAREER</p>
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
              animationData={global}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        {/* ------------------------- UNLIMITED LIVE SUPPORT ------------------ */}
        <div className="w-full flex my-11">
          <div className="bg-[#163681] p-14 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white">ZERO TO CAREER</h1>
            <div className="mt-3">
              <p className="text-white">ZERO TO CAREER</p>
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
              animationData={message}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        {/* -------------------------  Using AI ------------------ */}
        <div className="w-full flex my-11">
          <div className="bg-[#163681] p-14 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white">ZERO TO CAREER</h1>
            <div className="mt-3">
              <p className="text-white">ZERO TO CAREER</p>
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
              animationData={ai}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        {/* -------------------------  International Remote Jobs ------------------ */}
        <div className="w-full flex my-11">
          <div className="bg-[#163681] p-14 rounded-tl-xl rounded-bl-xl">
            <h1 className="text-white">ZERO TO CAREER</h1>
            <div className="mt-3">
              <p className="text-white">ZERO TO CAREER</p>
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

// {`w-full h-[100px] mt-10 bg-green-700 transition-transform duration-700 ease-in-out ${
//   Math.round(scroll) > 2300 ? "translate-y-[-80px] z-40" : ""
// }`}

// transition-transform duration-700 ease-in-out ${
//   Math.round(scroll) > 2300 ? "translate-y-[-80px] z-40" : ""
//  }



























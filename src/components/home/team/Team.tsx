import { useState, useEffect } from "react";
import img1 from "../../../assets/p1.avif";
import img2 from "../../../assets/p2.jpg";
import img3 from "../../../assets/p3.jpg";
import img4 from "../../../assets/p5.avif";
import img5 from "../../../assets/p6.jpeg";

const Team = () => {
  const team = [img1, img3, img2, img4, img5, img2, img1, img3, img4];
  const [displayFirstSet, setDisplayFirstSet] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadingOut(true);

      setTimeout(() => {
        setDisplayFirstSet((prev) => !prev);
        setFadingOut(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-12 lg:p-0 relative">
      {/* <img className="absolute w-[600px] left-[50px]" src={grid} alt="" /> */}
      <div className="text-center ">
        <h1 className="text-gray-300 lg:text-[32px]">Meet our team_</h1>
        <p className="text-gray-300 py-2">
          Over 10 dedicated professionals drive our success through their
          expertise, collaboration, and <br /> innovation, ensuring we lead in
          our industry.
        </p>
      </div>

      <div
      className="teamImg"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", width: "500px", height: "400px" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            {displayFirstSet ? (
              <>
                {/* Top Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[0] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
                {/* Left Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[1] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
                {/* Center Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                   <img
                      src={team[2] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                </div>
                {/* Right Number */}
                {/* <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[3] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div> */}
                {/* Bottom Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                     <img
                      src={team[4] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
              </>
            ) : (
              <>
                {/* Top Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "0",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[5] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
                {/* Left Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                   <img
                      src={team[6] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
                {/* Center Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[7] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
                {/* Right Number */}
                {/* <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                     <img
                      src={team[8] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div> */}
                {/* Bottom Number */}
                <div
                  className="bg-[#00001F] border shadow-lg shadow-gray-600 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0",
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <span
                    style={{
                      opacity: fadingOut ? 0 : 1,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <img
                      src={team[3] as string}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

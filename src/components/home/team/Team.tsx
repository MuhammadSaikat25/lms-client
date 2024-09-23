import { useState, useEffect } from "react";

const Team = () => {
  const team = [1, 2, 3, 4, 5, 6, 7, 8, 10];
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
    <div className="">
      <div className="text-center ">
        <h1 className="text-gray-300 lg:text-[32px]">Meet our team_</h1>
        <p className="text-gray-300 py-2">
          Over 10 dedicated professionals drive our success through their
          expertise, collaboration, and <br /> innovation, ensuring we lead in
          our industry.
        </p>
      </div>
      <div
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
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[0]}
                  </span>
                </div>
                {/* Left Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[1]}
                  </span>
                </div>
                {/* Center Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[2]}
                  </span>
                </div>
                {/* Right Number */}
                {/* <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[3]}
                  </span>
                </div> */}
                {/* Bottom Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[4]}
                  </span>
                </div>
              </>
            ) : (
              <>
                {/* Top Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[5]}
                  </span>
                </div>
                {/* Left Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[6]}
                  </span>
                </div>
                {/* Center Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[7]}
                  </span>
                </div>
                {/* Right Number */}
                {/* <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    {team[8]}
                  </span>
                </div> */}
                {/* Bottom Number */}
                <div
                  className="bg-red-600 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white"
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
                    10
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

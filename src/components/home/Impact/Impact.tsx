import CountUp from "react-countup";

const Impact = () => {
  return (
    <div
      className={`py-[150px] Impact2 bg-[#604CC3] lg:flex justify-end lg:px-10`}
    >
      <div className="w-fit mx-auto lg:mx-0">
        <h1 className="text-gray-400 text-right py-2">
          Our <br /> Impact_
        </h1>
        <div className="Impact text-white flex flex-col md:flex-row items-center justify-center gap-8 text-center lg:w-fit p-10 rounded-md">
          <div className="">
            <p>
              {" "}
              <CountUp end={4000} />+
            </p>
            <p>
              Job placement <br />
              worldwide
            </p>
          </div>
          <p>|</p>
          <div className="">
            <p>
              {" "}
              <CountUp end={2056} />+
            </p>
            <p>
              Connected
              <br />
              companies
            </p>
          </div>
          <p>|</p>
          <div className="">
            <p>
              <CountUp end={20} />+
            </p>
            <p>
              Dedicated Job <br />
              Placement Executives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

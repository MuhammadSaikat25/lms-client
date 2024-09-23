import { useEffect, useState } from "react";
import bg from "../../assets/banner.jpg";
import Heroes from "../../components/home/Heroes/Heroes";
import Card from "../../components/home/card/Card";
import PopularCourse from "../../components/home/popular-course/PopularCourse";
import Company from "../../components/home/Company/Company";
import Team from "../../components/home/team/Team";
import HomeFaq from "../../components/home/Faq/HomeFaq";
import clogo from "../../assets/clogo.png";
import Impact from "../../components/home/Impact/Impact";
const Home = () => {
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
    <div>
      <img src={bg} alt="Banner" className="w-full" />

      <div className={`w-full flex justify-end bg-[#000316] relative pb-10 `}>
        <img
          className={`w-[300px] absolute h-300px] transition-transform duration-1000
    ${scroll > 450 && "translate-x-[-170px] translate-y-[120px]"}
    ${scroll > 512 && "translate-x-[-450px] translate-y-[120px]"}
    ${scroll > 600 ? "scale-x-[-1]" : "scale-x-[1]"}
    ${scroll > 640 && "translate-x-[-450px] w-[499px] translate-y-[350px]"}
    ${scroll > 1228 && "translate-x-[-550px] w-[499px] translate-y-[785px]"}
    ${scroll > 1560 && "opacity-0 duration-1000"}
  `}
          src={clogo}
          alt=""
        />
      </div>

      <Heroes />
      <Impact />

      <div
        className={`${
          scroll < 2370 ? "bg-[#604CC3]" : "bg-[#23194f]"
        } transition-colors duration-300`}
      >
        <div className="p-3 lg:py-20">
          <div className="text-center">
            <p className="text-[#EEE0FF] md:text-[25px]">X-Factors of</p>
            <p className="text-[#EEE0FF] md:text-[25px] pt-1">Coding hero_</p>
          </div>
          <Card />
        </div>
      </div>

      <div
        className={`${
          scroll > 2984 && 4592 < scroll ? "grad2" : "popularCourse"
        } transition-colors duration-1000`}
      >
        <h1 className="text-[#B7C9FF] text-center text-[20px] py-4">
          Our most popular course_
        </h1>
        <PopularCourse />
      </div>
      <div className="company">
        <Company />
      </div>
      <div
        className={`pb-[100px] pt-10  ${scroll > 5652 && "sm:bg-[#604CC3]"} ${
          scroll > 3125 && "sm:bg-[#00001F]"
        } ${
          scroll > 5207
            ? "lg:bg-[#604CC3] transition-colors duration-700"
            : "lg:bg-[#00001F] transition-colors duration-700"
        } `}
      >
        <Team />
      </div>

      <div
        className={`p-5 pt-40 lg:pt-10 pb-11 ${
          scroll < 5207
            ? "bg-[#00001F] text-gray-400 transition-colors duration-700"
            : "bg-[#604CC3] transition-colors duration-700"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center lg:justify-end lg:pr-32 gap-5 ">
          <h1 className="text-gray-300 text-[20px]">Faq_</h1>
          <HomeFaq />
        </div>
      </div>
    </div>
  );
};

export default Home;

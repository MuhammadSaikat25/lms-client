import { useEffect, useState } from "react";
import bg from "../../assets/banner.jpg";
import Heroes from "../../components/home/Heroes/Heroes";
import Card from "../../components/home/card/Card";
import PopularCourse from "../../components/home/popular-course/PopularCourse";
import Company from "../../components/home/Company/Company";
import Team from "../../components/home/team/Team";
import HomeFaq from "../../components/home/Faq/HomeFaq";

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
  console.log(scroll);
  const getBackgroundColor = () => {
    if (scroll < 500) return "bg-emerald-500";
    if (scroll >= 500 && scroll < 3300) return "bg-purple-400";
    return "bg-[#604CC3]"; // Default color for scroll > 3300
  };

  return (
    <div>
      <img src={bg} alt="Banner" className="w-full" />

      <div
        className={`w-full h-screen ${getBackgroundColor()} transition-colors duration-1000`}
      ></div>

      <div className="w-full h-screen bg-green-500"></div>

      <Heroes />

      <div
        className={`${
          scroll < 3193 ? "bg-[#604CC3]" : "bg-[#23194f]"
        } transition-colors duration-300`}
      >
        <div className="p-3">
          <div className="text-center">
            <p className="text-[#EEE0FF] md:text-[25px]">X-Factors of</p>
            <p className="text-[#EEE0FF] md:text-[25px] pt-1">Coding hero_</p>
          </div>
          <Card />
        </div>
      </div>

      <div
        className={`${
          scroll > 3317 && 4592 < scroll ? "grad2" : "popularCourse"
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
        className={`pb-[100px] ${
          scroll > 4235 && 5235 < scroll
            ? "bg-[#604CC3] transition-colors duration-700"
            : "bg-[#00001F] transition-colors duration-700"
        } `}
      >
        <Team />
      </div>

      <div
        className={`p-5 ${
          scroll < 5235
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

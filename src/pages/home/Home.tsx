import { useEffect, useState } from "react";
import bg from "../../assets/banner.jpg";
import Heroes from "../../components/home/Heroes/Heroes";
import Card from "../../components/home/card/Card";

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

      <div
        className={`w-full h-screen ${
          scroll >= 500 ? "bg-purple-400" : "bg-emerald-500"
        } transition-colors duration-1000`}
      ></div>

      <div className="w-full h-screen bg-green-500"></div>

      <Heroes />

      <div className="bg-[#604CC3] p-3">
        <div className="text-center">
          <p className="text-[#EEE0FF] md:text-[25px]">X-Factors of </p>
          <p className="text-[#EEE0FF] md:text-[25px] pt-1">Coding hero_</p>
        </div>
        <Card />
      </div>
      
    </div>
  );
};

export default Home;

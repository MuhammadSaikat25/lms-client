import { useEffect, useState } from "react";
import bg from "../../assets/banner.jpg";
import Heroes from "../../components/home/Heroes/Heroes";
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
    <div className="">
      <img src={bg} alt="" className="w-full" />
      <div
        className={`w-full h-screen ${
          scroll >= 500 ? "bg-purple-400" : "bg-emerald-500"
        } transition-colors duration-1000`}
      ></div>
      <div className="w-full h-screen bg-green-500"></div>
      <Heroes/>
    </div>
  );
};

export default Home;

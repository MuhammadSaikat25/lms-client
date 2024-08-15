import { useEffect, useState } from "react";

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
      <div className="w-full h-screen bg-red-500"></div>
      <div
        className={`w-full h-screen ${
          scroll >= 400 ? "bg-purple-400" : "bg-emerald-500"
        } transition-colors duration-1000`}
      ></div>
      <div className="w-full h-screen bg-green-500"></div>
    </div>
  );
};

export default Home;

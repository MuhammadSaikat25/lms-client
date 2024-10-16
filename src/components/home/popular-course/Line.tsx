import { Link } from "react-router-dom";
import img from "../../../assets/line.png";
import "./line.css";
const Line = () => {
  return (
    <div className="relative">
      <div className=" relative pt-20">
        <div
          className="cloud absolute bottom-0"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      <div className="bg-red-500 flex items-center justify-center">
        <Link to={'/course'} className="absolute btn p-3 text-white -top-1 rounded-lg">Join Us</Link>
      </div>
    </div>
  );
};

export default Line;

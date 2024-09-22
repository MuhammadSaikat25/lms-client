import "./PopularCourse.css";
import java from "../../../assets/Java-Full-Stack.png";
import mern from "../../../assets/mern.avif";
import ts from "../../../assets/ts.png";
import py from "../../../assets/py.jpeg";
import ps from "../../../assets/ps.jpeg";

const PopularCourse = () => {
  return (
    <div className="course-container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-10 gap-3">
      <div className="course">
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg object-fill"
            src={java}
            alt=""
          />
        </div>
      </div>
      <div className="course">
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg object-fill"
            src={mern}
            alt=""
          />
        </div>
      </div>
      <div className="course">
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg object-fill"
            src={ts}
            alt=""
          />
        </div>
      </div>
      <div className="course">
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg object-fill"
            src={ps}
            alt=""
          />
        </div>
      </div>
      <div className="course">
        <div className="">
          <img
            className="w-[250px] h-[250px] rounded-lg object-fill"
            src={py}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;



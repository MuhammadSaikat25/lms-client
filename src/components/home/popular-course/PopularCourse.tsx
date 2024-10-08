import "./PopularCourse.css";
import java from "../../../assets/Java-Full-Stack.png";
import mern from "../../../assets/mern.avif";
import ts from "../../../assets/ts.png";
import py from "../../../assets/py.jpeg";
import ps from "../../../assets/ps.jpeg";

const PopularCourse = () => {
  return (
    <div className="course-container">
      <div className="course">
        <img
          className="imageDIV  lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={java}
          alt="Java Full Stack Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={mern}
          alt="MERN Stack Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={ts}
          alt="TypeScript Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={ps}
          alt="Photoshop Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={py}
          alt="Python Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={java}
          alt="Python Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={ts}
          alt="Python Course"
        />
      </div>
      <div className="course">
        <img
          className="imageDIV lg:w-[450px] h-[250px] rounded-lg object-fill"
          src={mern}
          alt="Python Course"
        />
      </div>
    </div>
  );
};

export default PopularCourse;

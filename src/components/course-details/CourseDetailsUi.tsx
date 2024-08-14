import reactLogo from "../../assets/React.png";
import htmlLogo from "../../assets/Html.png";
import tailwindLogo from "../../assets/Tailwind.png";
import "./courserDetails.css";
import { useParams } from "react-router-dom";
import CourseCurriculum from "./CourseCurriculum";
import CourseBenefit from "./CourseBenefit";
import CoursePlayer from "./CoursePlayer";
import CourseSpecialty from "./CourseSpecialty";
import CourseWork from "./CourseWork";
import CourseInfo from "./CourseInfo";

const CourseDetailsUi = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex justify-between px-5 pt-2">
        <div className="">
          <img
            src={reactLogo}
            className="animate-spin-slow mb-5 w-[70px]"
            alt="React Logo"
          />
          <img
            className="html-animation w-[70px]"
            src={htmlLogo}
            alt="HTML Logo"
          />
        </div>
        <div className="">
          <h1 className="text-gray-300 text-center lg:text-2xl text-gradient3">
            Breakthroughs Begin with learning, reach <br /> for the future you
            deserve
          </h1>
          <CourseBenefit id={id} />
        </div>
        <div className="">
          <img
            className="tailwind-animation w-[70px]"
            src={tailwindLogo}
            alt="Tailwind Logo"
          />
          <img
            src={reactLogo}
            className="animate-spin-slow w-[70px]"
            alt="React Logo"
          />
        </div>
      </div>
      <div className="w-full lg:w-[70%] h-[300px] mx-auto px-3">
        <CoursePlayer id={id!} />
      </div>
      <CourseInfo/>
      {/* ------------------  Course Curriculum------------ */}
      <CourseCurriculum id={id} />
      <CourseSpecialty />
      <CourseWork id={id!} />
    </>
  );
};

export default CourseDetailsUi;

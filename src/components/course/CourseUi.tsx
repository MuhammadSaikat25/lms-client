import { useEffect, useState } from "react";
import { useGetAllCourseForStudentQuery } from "../../redux/feature/course/courseApi";
import CourseCard from "./CourseCard";
import { FadeLoader } from "react-spinners";

const CourseUi = () => {
  const { data } = useGetAllCourseForStudentQuery(undefined);

  const [allCourse, setAllCourse] = useState([]);
  useEffect(() => {
    setAllCourse(data?.data.slice(8));
  }, [data]);

  return (
    <div>
      {allCourse ? (
        <CourseCard allCourse={allCourse} />
      ) : (
        <div className="flex items-center justify-center">
          <FadeLoader color="white" />
        </div>
      )}
    </div>
  );
};

export default CourseUi;

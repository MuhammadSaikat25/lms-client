import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseApi";
import { useEffect, useState } from "react";
import AccessCourseContent from "./AccessCourseContent";


const CourseAccessUi = () => {
  const { id } = useParams();
  const { data: enrollCourse } = useGetSingleCourseQuery(id, {
    skip: !id,
  });
  const [course, setCourse] = useState();
  useEffect(() => {
    setCourse(enrollCourse?.data);
  }, [enrollCourse]);
  return (
    <div>
      <AccessCourseContent course={course} />
    </div>
  );
};

export default CourseAccessUi;

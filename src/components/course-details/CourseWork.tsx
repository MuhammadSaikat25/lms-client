import { useEffect, useState } from "react";
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseApi";

type Props = {
  id: string;
};
const CourseWork = ({ id }: Props) => {
  const [course, setCourse] = useState<any>();
  const { data } = useGetSingleCourseQuery(id, { skip: !id });

  useEffect(() => {
    setCourse(data?.data.name);
  }, [data]);
  return (
    <div className="bg-[#010313] text-white flex relative">
      <div className="">
        <h1 className="mb-3">How Will This Course Work_?</h1>
        <h1 className="mb-3">
          This course guides you from basics to mastering <br /> the {course}{" "}
          with step-by-step lessons, hands-on <br /> projects, and assessments.
        </h1>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default CourseWork;

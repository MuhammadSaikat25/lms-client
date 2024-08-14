import { useEffect, useState } from "react";
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseApi";

type Props = {
  id: any;
};
const CourseCurriculum = ({ id }: Props) => {
  const [courseContent, setCourseContent] = useState<any>();
  const { data } = useGetSingleCourseQuery(id, { skip: !id });

  useEffect(() => {
    setCourseContent(data?.data.courseContent);
  }, [data]);

  return (
    <div className="mt-7 text-white p-3 lg:p-0">
      <h1 className="text-[20px] font-Poppins text-center lg:text-2xl mb-2">
        Course Curriculum
      </h1>
      <p className="text-center text-gray-400 mb-3">
        Coding Hero's dynamic course guides students from {data?.data.name}
        <span>
          to complete mastery, ensuring a strong <br /> foundation. This
          comprehensive approach makes the learning journey smooth and engaging.
        </span>
      </p>
      {courseContent && (
        <div className=" bg-[#180B28] h-[300px] overflow-y-auto overflow-hidden rounded-md lg:w-[70%] mx-auto p-6">
          <h1 className="bg-[#FF978C] p-2 text-gray-800 font-semibold ">
            Course Module
          </h1>
          {courseContent?.map((video: any, index: number) => (
            <div
              key={index}
              className="bg-[#1A093A] mt-3 mb-1 p-2 rounded hover:border  border-purple-950 duration-500 "
            >
              <div>
                <h1>
                  Module{index + 1}:{video.module}
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCurriculum;

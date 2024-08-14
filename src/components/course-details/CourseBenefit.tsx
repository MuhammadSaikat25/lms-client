import { useEffect, useState } from "react";
import { useGetSingleCourseQuery } from "../../redux/feature/course/courseApi";

type Props = {
  id: any;
};

const CourseBenefit = ({ id }: Props) => {
  const [courseBenefit, setCourseBenefit] = useState<any>();
  const { data } = useGetSingleCourseQuery(id, { skip: !id });

  useEffect(() => {
    setCourseBenefit(data?.data);
  }, [data]);

  return (
    <div className="text-gray-400 mt-5 ">
      {courseBenefit?.benefits.length > 0 && (
        <div className="flex flex-wrap space-x-2 lg:justify-center ">
          {courseBenefit.benefits.map((benefit: any, i: number) => (
            <h1 key={i} className="flex-none ">
              {benefit.title}
              {i === courseBenefit?.benefits?.length - 1 ? " ." : " |"}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseBenefit;

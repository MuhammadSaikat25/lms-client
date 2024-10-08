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
    <div className={`bg-[#010313] text-white relative`}>
      <div className={`flex flex-col lg:flex-row justify-around gap-5 p-3`}>
        <div className="relative">
          <div className={` lg:sticky top-[300px]`}>
            <h1 className="mb-3 lg:text-3xl text-gray-300">
              How Will This Course <br /> Work_?
            </h1>
            <h1 className="mb-3 text-gray-600">
              This course guides you from basics to mastering <br /> the{" "}
              {course} with step-by-step lessons, hands-on <br /> projects, and
              assessments.
            </h1>
           
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-3">
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">Module Release Time</p>
            <p className="text-gray-400">
              Everyday we will be given a module/practice task. Videos will be
              released at 10.00pm. Smart students may trick our system to get
              module access 2 hours earlier than everyone else
            </p>
          </div>
          {/* ------------------------ */}
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">Search Similar Topic Online</p>
            <p className="text-gray-400">
              Keep 1-2 hours everyday to clear our doubts from google, or using
              our support system. If you do not have any doubts, we recommend
              you search the similar topic of the module online
            </p>
          </div>
          {/* ------------------------ */}
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">Live Conceptual Session</p>
            <p className="text-gray-400">
              You will have a practice day after every 2-4 modules. And there
              will be a conceptual session on that practice day. We highly
              recommend our students to join the live conceptual session.
            </p>
          </div>
          {/* ------------------------ */}
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">SCIC</p>
            <p className="text-gray-400">
              If you finish our main course on time with good marks, you will
              qualify for the SCIC. you will have to stay focused and dedicated
              to finish the course on time.
            </p>
          </div>
          {/* ------------------------ */}
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">Support Session</p>
            <p className="text-gray-400">
              We will answer every question related to our course within 10
              hours. Also, you may join our live support session three times in
              a day (Friday morning there won't be any live support session)
            </p>
          </div>
          {/* ------------------------ */}
          <div className="bg-gray-900 p-6 rounded-xl ">
            <p className="text-gray-300 py-3">20 Week Course</p>
            <p className="text-gray-400">
              We believe there is no shortcut, other than hard work. So, be
              committed to invest 6-8 hours every single day for the next 20
              weeks to finish our main course on time.
            </p>
          </div>
          {/* ------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default CourseWork;

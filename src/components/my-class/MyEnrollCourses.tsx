import { useNavigate } from "react-router-dom";

type Props = {
  enrollCourses: [{ [key: string]: any }];
};

const MyEnrollCourses = ({ enrollCourses }: Props) => {
  const navigate = useNavigate();
  const wName = "<Coding/> Hero";

  return (
    <div className="text-white p-2 lg:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {enrollCourses &&
          enrollCourses.map((course: any, i: number) => (
            <div
              key={i}
              className="bg-[#110630] p-3 rounded border border-blue-600 flex gap-4"
            >
              <div>
                <img
                  src={course.thumbnail}
                  className="w-[150px] lg:w-[300px] h-[100px] object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-purple-400">{course.name}</h1>
                <h1 className="webName">{wName}</h1>
                <button
                  className="bg-purple-700 px-2 rounded-3xl text-[13px]"
                  onClick={() => navigate(`/course-access/${course._id}`, { replace: true })}
                >
                  Continue Course
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyEnrollCourses;

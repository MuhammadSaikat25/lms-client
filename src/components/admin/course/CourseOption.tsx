import { FC } from "react";
import { IoCheckmarkDone } from "react-icons/io5";

type Props = {
  active: number;
};
const CourseOption: FC<Props> = ({ active }) => {
  const option = [
    "Course-Information",
    "Course Option",
    "Course Content",
    "course Preview",
  ];

  return (
    <div className="text-white lg:text-[15px]">
      {option.map((option: string, i: number) => (
        <div key={i} className="w-full flex py-5">
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center relative ${
              active + 1 > i ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            <IoCheckmarkDone className="text-[25px]" />
            {i !== option.length && (
              <div
                className={`absolute h-[30px] w-1 ${
                  active + 1 > i ? "bg-blue-600" : "bg-gray-600"
                } bottom-[100%]`}
              />
            )}
          </div>
          <h1
            className={`hidden lg:block pl-3 ${
              active === i ? "text-gradient" : ""
            }`}
          >
            {option}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CourseOption;

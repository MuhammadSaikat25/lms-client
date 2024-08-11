import { FC, useState } from "react";
import CoursePlayer from "./CoursePlayer";

interface Props {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handelCourseCreate: any;
  updateCourse: boolean;
}

const CoursePreview: FC<Props> = ({
  active,
  courseData,
  handelCourseCreate,
  setActive,
  updateCourse,
}) => {
  const [demoVideoLoading, setDemoVideoLoading] = useState(true);
  const [demoVideoError, setDemoVideoError] = useState<string | null>(null);
  const createCourse = () => {
    handelCourseCreate();
  };
  return (
    <div className="text-white">
      <CoursePlayer
        demoUrl={courseData.demoUrl}
        title={courseData.title}
        setDemoVideoLoading={setDemoVideoLoading}
        setDemoVideoError={setDemoVideoError}
        demoVideoLoading={demoVideoLoading}
        demoVideoError={demoVideoError}
      />
      <div className="w-[67%] mx-auto">
        <h1>Buy</h1>
        <div className="">
          <div
            className=""
            onClick={() => {
              setActive(active - 1);
            }}
          >
            pre
          </div>
          <div onClick={() => createCourse()} className="">
            {updateCourse ? <p>update</p> : <p>create course</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
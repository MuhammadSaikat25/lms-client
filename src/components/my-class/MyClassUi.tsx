import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hook";
import { usePurchaseCourseQuery } from "../../redux/feature/course/courseApi";
import CircularProgress from "@mui/material/CircularProgress";
import MyEnrollCourses from "./MyEnrollCourses";
import { useEffect, useState } from "react";

const MyClassUi = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [enrollCourses, setEnrollCourses] = useState<any[]>([]);

  const { data: purchaseCourse, isFetching } = usePurchaseCourseQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    setEnrollCourses(purchaseCourse?.data?.courses || []);
  }, [purchaseCourse]);

  return (
    <div className="lg:w-[70%] mx-auto mb-3 p-2">
      <h1 className="text-gray-300 py-4">
        Welcome back <span className="text-blue-400">{user?.name}</span>, ready
        for your lesson?
      </h1>
      {isFetching ? (
        <p className="w-full h-screen flex items-center justify-center">
          <CircularProgress />
        </p>
      ) : (
        <div>
          {enrollCourses?.length > 0 ? (
            <MyEnrollCourses enrollCourses={enrollCourses} />
          ) : (
            <p className="text-gray-300 ">
              {" "}
              You did not purchase any course yet
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyClassUi;

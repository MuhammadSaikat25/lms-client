import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hook";
import { useGetAllCourseForStudentQuery } from "../../redux/feature/course/courseApi";
import { useGetAllUserQuery } from "../../redux/feature/user/userApi";
import MyEnrollCourses from "./MyEnrollCourses";
import { useEffect, useState } from "react";

const MyClassUi = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [enrollCourses, setEnrollCourses] = useState();
  const { data: allUsers,refetch } = useGetAllUserQuery(undefined);
  const loginUser =
    user && allUsers?.data.find((allUser: any) => allUser.email === user.email);

  const { data: allCourse } = useGetAllCourseForStudentQuery(undefined);

  useEffect(() => {
    refetch()
    const course =
      loginUser &&
      allCourse?.data.filter(
        (item: any) =>
          Array.isArray(loginUser.courses) &&
          loginUser.courses.some((course: any) => course.courseId === item._id)
      );
    setEnrollCourses(course);
  }, [loginUser, allCourse]);
  return (
    <div className="lg:w-[70%] mx-auto mb-3">
      <h1 className="text-gray-300 my-8">
        Welcome back <span className="text-blue-400">{user?.name}</span>, ready
        for your lesson?
      </h1>
      <MyEnrollCourses enrollCourses={enrollCourses!} />
    </div>
  );
};

export default MyClassUi;

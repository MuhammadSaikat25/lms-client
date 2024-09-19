import { useEffect, useState } from "react";
import { useGetSingleCourseQuery } from "../../../redux/feature/course/courseApi";
import Stripe from "./Stripe";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useGetAllUserQuery } from "../../../redux/feature/user/userApi";
type Props = {
  id: string;
};

const CourseEnroll = ({ id }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [course, steCourse] = useState<any>();
  const { data } = useGetSingleCourseQuery(id!, { skip: !id });
  const { data: allUsers } = useGetAllUserQuery(undefined);
  const loginUser =
    user &&
    allUsers?.data.find((allUser: any) => allUser.email === user?.email);

  let isCoursePurchased;
  if (loginUser) {
    isCoursePurchased = loginUser?.courses.find(
      (PurchasedCourse: any) => PurchasedCourse.courseId === id
    );
  }

  useEffect(() => {
    steCourse(data?.data);
  }, [data, id]);
  const [open, setOpen] = useState(false);
  const handelClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpen(false);
      }
    }
  };
  const handelOpen = () => {
    if (!user) {
      toast.error("Login first");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    setOpen(true);
  };

  return (
    <div className="text-white w-[60%] mx-auto py-10">
      <Toaster />
      <div className="">
        {isCoursePurchased ? (
          <h1
            onClick={() => navigate(`/course-access/${course._id}`)}
            className="bg-blue-600 px-10 rounded-2xl text-center cursor-pointer hover:bg-pink-950 duration-500 lg:w-[40%] mx-auto"
          >
            Access course
          </h1>
        ) : (
          <div className="flex items-center gap-2">
            <h1 className="bg-blue-500 rounded-3xl px-3 w-fit">
              Price: ${course?.price}
            </h1>
            <h1
              onClick={handelOpen}
              className="cursor-pointer bg-blue-500 rounded-3xl px-3 w-fit"
            >
              Enroll Course
            </h1>
          </div>
        )}
      </div>
      <div className="">
        {open && (
          <div
            onClick={handelClose}
            className="fixed w-full h-screen top-0 z-10 "
            id="screen"
          >
            <div className="w-fit h-fit p-3 rounded bg-white absolute top-[30%] left-[30%]">
              <Stripe />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseEnroll;

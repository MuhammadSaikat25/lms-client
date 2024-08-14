import CircularProgress from "@mui/material/CircularProgress";

import { PiUsersThreeFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

import { CgDollar } from "react-icons/cg";
import {
  useGetCourseAnalyticsQuery,
  useGetUserAnalyticsQuery,
} from "../../redux/feature/analytics/analyticsApi";
import { useGetAllOrdersQuery } from "../../redux/feature/order/orderApi";
import CourseAnalyticsUI from "./course-analytics/CourseAnalyticsUI";
import OrderAnalyticsUi from "./order-analytics/OrderAnalyticsUi";

const DashboardHeroComponent = () => {
  const { data: userAnalytics } = useGetUserAnalyticsQuery(undefined);
  const { data: courseAnalytics } = useGetCourseAnalyticsQuery(undefined);
  const { data: allOrders } = useGetAllOrdersQuery(undefined);
  const [orders, setOrders] = useState(0);
  const [courses, setCourses] = useState();
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const user = userAnalytics?.data?.last12Months.reduce(
      (pre: any, curr: any) => pre + curr.count,
      0
    );
    const course = courseAnalytics?.data?.last12Months.reduce(
      (pre: any, curr: any) => pre + curr.count,
      0
    );
    setCourses(course);
    const order = allOrders?.data?.reduce(
      (pre: any, curr: any) => pre + curr.courseId.price,
      0
    );
    setOrders(order);

    if (user > 20) {
      setUsers(user);
    } else {
      setUsers(49);
    }
  }, [userAnalytics, courseAnalytics, allOrders]);

  return (
    <div className="w-full h-screen lg:flex overflow-hidden text-white pt-12 lg:pt-0">
      <div className="w-full h-[35%]  lg:h-[60%]">
        <CourseAnalyticsUI adminHero={true} />
        <OrderAnalyticsUi adminHero={true}/>
      </div>
      <div className="relative z-10 mt-[100px] mx-auto w-fit md:pt-6 lg:mt-0 lg:pt-20">
        {/* user info */}
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-2 lg:p-5 rounded">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <PiUsersThreeFill />
              Total User
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={users} />
              <p>+{users}%</p>
            </div>
          </div>
        </div>
        {/* course info */}
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-2 lg:p-5 rounded mt-3">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <MdOutlineCastForEducation />
              Total Courses
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={courses} />
              <p>+{courses}%</p>
            </div>
          </div>
        </div>
        <div className="bg-[#170F21] w-[250px] lg:w-[300px] p-2 lg:p-5 rounded mt-3">
          <div className="flex items-center gap-x-24 gap-y-7">
            <div className="flex flex-col items-center">
              <CgDollar />
              Total Income
            </div>
            <div className="">
              <CircularProgress variant="determinate" value={orders} />
              <p>$ {orders}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeroComponent;

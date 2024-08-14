import { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useGetCourseAnalyticsQuery } from "../../../redux/feature/analytics/analyticsApi";
import { FadeLoader } from "react-spinners";
type Props = {
  adminHero?: boolean;
};
const CourseAnalyticsUI = ({ adminHero }: Props) => {
  const [analytics, setAnalytics] = useState([]);
  const { data: courseAnalytics } = useGetCourseAnalyticsQuery(undefined);

  useEffect(() => {
    if (courseAnalytics) {
      setAnalytics(courseAnalytics.data.last12Months);
    }
  }, [courseAnalytics]);

  const newData = analytics.map((value: any) => {
    return {
      name: value.month,
      course: value.count,
    };
  });

  return (
    <div className={`${adminHero?"":"pt-20"}`} style={{ width: "80%", height: "70%" }}>
      {courseAnalytics ? (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={newData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="course" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="course" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-screen">
          {!adminHero && <FadeLoader color="white" />}
        </div>
      )}
    </div>
  );
};

export default CourseAnalyticsUI;

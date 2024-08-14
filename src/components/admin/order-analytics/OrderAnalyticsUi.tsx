import { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useGetOrderAnalyticsQuery } from "../../../redux/feature/analytics/analyticsApi";
import { FadeLoader } from "react-spinners";

type Props = {
  adminHero?: boolean;
};
const OrderAnalyticsUi = ({ adminHero }: Props) => {
  const [analytics, setAnalytics] = useState([]);
  const { data: orderAnalytics } = useGetOrderAnalyticsQuery(undefined);

  useEffect(() => {
    if (orderAnalytics) {
      setAnalytics(orderAnalytics.data.last12Months);
    }
  }, [orderAnalytics]);

  const newData = analytics.map((value: any) => {
    return {
      name: value.month,
      order: value.count,
    };
  });

  return (
    <div
      className={`${adminHero ? "" : "pt-20"}`}
      style={{ width: "80%", height: "70%" }}
    >
      {orderAnalytics ? (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={newData}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{ value: "", position: "insideBottomRight", offset: 0 }}
              scale="band"
            />
            <YAxis label={{ value: "", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="order"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="order" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="order" stroke="#ff7300" />
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

export default OrderAnalyticsUi;

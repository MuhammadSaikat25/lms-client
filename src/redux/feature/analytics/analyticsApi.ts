import { baseApi } from "../api/baseApi";

const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourseAnalytics: builder.query({
      query: () => {
        return {
          url: "get-course-analytic",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getOrderAnalytics: builder.query({
      query: () => {
        return {
          url: "get-order-analytic",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getUserAnalytics: builder.query({
      query: () => {
        return {
          url: "get-user-analytic",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetCourseAnalyticsQuery, useGetOrderAnalyticsQuery,useGetUserAnalyticsQuery } =
  analyticsApi;
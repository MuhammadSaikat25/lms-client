import { baseApi } from "../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => {
        return {
          url: `get-allOrder`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getStripePk: builder.query({
      query: () => {
        return {
          url: "payment/stripePk",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    cratePayment: builder.mutation({
      query: (amount) => {
        return {
          url: "payment",
          method: "POST",
          body: amount,
          credentials: "include",
        };
      },
    }),
    crateOrder: builder.mutation({
      query: ({ courseId, paymentInfo }) => {
        return {
          url: "order",
          method: "POST",
          body: {
            courseId,
            paymentInfo,
          },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useCratePaymentMutation,
  useGetStripePkQuery,
  useCrateOrderMutation,
} = orderApi;
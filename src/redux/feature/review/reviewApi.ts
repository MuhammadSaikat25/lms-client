import { baseApi } from "../api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ ratings, id }) => {
        return {
          url: `/review/${id}`,
          method: "POST",
          body: { rating: ratings },
          credentials: "include",
        };
      },
    }),
    getReview: builder.query({
      query: () => {
        return {
          url: `/review`,
        };
      },
    }),
  }),
});
export const { usePostReviewMutation,useGetReviewQuery } = reviewApi;

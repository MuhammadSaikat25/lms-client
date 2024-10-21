import { baseApi } from "../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "create-course",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),
    // for admin dashboard
    getAllCourse: builder.query({
      query: () => ({
        url: "get-allCourse",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["course"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, updateData }) => {
        return {
          url: `update-course/${id}`,
          method: "PUT",
          body: updateData,
          credentials: "include",
        };
      },
      invalidatesTags: ["course"],
    }),
    // get all course for user
    getAllCourseForStudent: builder.query({
      query: () => ({
        url: "course",
        method: "GET",
      }),
      providesTags: ["course"],
    }),

    getSingleCourse: builder.query({
      query: (id) => ({
        url: `course/${id}`,
        method: "GET",
      }),
    }),
    purchaseCourse: builder.query({
      query: () => ({
        url: `/my-purchaseCourse`,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => {
        console.log(id)
        return {
          url: `/delete-course/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useUpdateCourseMutation,
  useGetAllCourseForStudentQuery,
  useGetSingleCourseQuery,
  usePurchaseCourseQuery,
  useDeleteCourseMutation
} = courseApi;

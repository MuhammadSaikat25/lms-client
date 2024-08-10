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
    }),
    // for admin dashboard
    getAllCourse: builder.query({
      query: () => ({
        url: "get-allCourse",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateCourse: builder.mutation({
      query: ({ id, updateData }) => {
        console.log(id, "api");
        return {
          url: `update-course/${id}`,
          method: "PUT",
          body: updateData,
          credentials: "include",
        };
      },
    }),
    // get all course for user
    getAllCourseForStudent: builder.query({
      query: () => ({
        url: "course",
        method: "GET",
      }),
    }),
    
    getSingleCourse: builder.query({
      query: (id) => ({
        url: `course/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useUpdateCourseMutation,
  useGetAllCourseForStudentQuery,
  useGetSingleCourseQuery
} = courseApi;
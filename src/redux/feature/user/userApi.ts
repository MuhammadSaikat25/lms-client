import { baseApi } from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "/update-user-avatar",
        method: "POST",
        body: { avatar },
        credentials: "include",
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "get-allUsers",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ email, role }) => {
        console.log(email, role, 1);
        return {
          url: `update-role/${email}`,
          method: "PUT",
          body: { email, role },
          credentials: "include",
        };
      },
    }),
    updateUserData: builder.mutation({
      query: (playLoad) => {
        return {
          url: `update-user/${playLoad.email}`,
          method: "PUT",
          body: playLoad,
          credentials: "include",
        };
      },
    }),
  }),
});
export const {
  useUpdateAvatarMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
  useUpdateUserDataMutation,
} = userApi;

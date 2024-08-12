import { baseApi } from "../api/baseApi";

const layOutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHero: builder.query({
      query: (HeroType) => {
        return {
          url: `get-layout/${HeroType}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
    updateHero: builder.mutation({
      query: (HeroType) => {
        return {
          url: `edit-layout`,
          method: "PUT",
          body: HeroType,
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useGetHeroQuery, useUpdateHeroMutation } = layOutApi;
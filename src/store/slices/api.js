import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  reducerPath: 'api',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://appx.cacafly.com/gwsdev-api/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.app?.user?.roles[0]?.accessToken?.token;
      if (token) {
        headers.set('x-auth-token', token);
      }
      return headers;
    }
  }),

  endpoints: () => ({}),
});
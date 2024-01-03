import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { rtkApi } from "@/config/rtkApi";

const userSubscriptionApi = rtkApi.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      never,
      "api"
    >,
  ) => ({
    subscribeUser: build.mutation<void, string>({
      query: (email: string) => ({
        url: `/users/add`,
        method: "POST",
        body: {
          email,
        },
      }),
    }),
  }),
});

export const useSubscribeUser = userSubscriptionApi.useSubscribeUserMutation;

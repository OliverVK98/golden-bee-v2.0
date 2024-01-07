import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Order } from "@/types/types";
import { rtkApi } from "@/config/rtkApi";

const orderApi = rtkApi.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      never,
      "api"
    >,
  ) => ({
    submitOrder: build.mutation<void, Order>({
      query: (order) => ({
        url: `/orders`,
        method: "POST",
        body: order,
      }),
    }),
  }),
});

export const useSubmitOrder = orderApi.useSubmitOrderMutation;

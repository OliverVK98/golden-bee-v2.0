import {BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {Product} from "@/types/types";
import {rtkApi} from "@/config/rtkApi";

const productApi = rtkApi.injectEndpoints({
  endpoints: (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, "api">) => ({
    getTrendingProducts: build.query<Product[], void>({
      query: () => ({
        url: `/items/trending`,
      }),
    })
  }),
});

export const useGetTrendingProducts = productApi.useGetTrendingProductsQuery;

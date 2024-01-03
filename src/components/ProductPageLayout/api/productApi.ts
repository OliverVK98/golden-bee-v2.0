import {BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {Product} from "@/types/types";
import {rtkApi} from "@/config/rtkApi";

const productApi = rtkApi.injectEndpoints({
  endpoints: (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, "api">) => ({
    getCollectionProducts: build.query<Product[], string>({
      query: (collection) => ({
        url: `/items?collection=${collection}`,
      }),
    })
  }),
});

export const useGetCollectionProducts = productApi.useGetCollectionProductsQuery;

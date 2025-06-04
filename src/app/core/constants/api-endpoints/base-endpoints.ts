// src/app/core/constants/api-endpoints/products.endpoints.ts
import { ApiEndpoint } from '.';
import { ApiBaseAlias } from '../api-base-alias';

export const BaseEndpoints = {
  products: {
    list: {
      path: '/products',
      base: ApiBaseAlias.BASE
    },
    detail: (id: number): ApiEndpoint => ({
      path: `/products/${id}`,
      base: ApiBaseAlias.BASE
    })
  },

  categories: {
    list: {
      path: '/categories',
      base: ApiBaseAlias.BASE
    },
    detail: (id: number): ApiEndpoint => ({
      path: `/categories/${id}`,
      base: ApiBaseAlias.BASE
    })
  },
};

import { ApiBaseAlias } from '../api-base-alias';

export const AuthEndpoints = {
  auth: {
    login: {
      path: '/auth/login',
      base: ApiBaseAlias.AUTH
    },
    logout: {
      path: '/auth/logout',
      base: ApiBaseAlias.AUTH
    }
  },
};


// src/app/core/constants/api-endpoints/index.ts

import { ApiBaseAlias } from "../api-base-alias";
import { AuthEndpoints } from "./auth-endpoints";
import { BaseEndpoints } from "./base-endpoints";

export interface ApiEndpoint {
  path: string,
  base: ApiBaseAlias
}


export const Endpoints = {
  ...AuthEndpoints,
  ...BaseEndpoints
};
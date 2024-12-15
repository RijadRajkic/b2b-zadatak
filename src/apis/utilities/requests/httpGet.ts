import { RequestHeader, RequestQueryParamInterface } from "../types";
import { httpBasic } from "./httpBasic";

export const httpGet = <ResponseType>(
  url: string,
  queryParams: RequestQueryParamInterface = {},
  headers: RequestHeader = {}
) => {
  return httpBasic<ResponseType>("GET", url, headers, queryParams);
};

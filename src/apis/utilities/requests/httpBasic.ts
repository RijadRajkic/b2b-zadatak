import axios from "axios";

import { clear } from "../../../utilities";

import { RequestHeader, RequestQueryParamInterface } from "../types";
import { parseQueryParam } from "../parseQueryParam";

import { DefaultRequestSettings } from "./defaultRequestSettings";

export const httpBasic = <ResponseType>(
 method: string,
 url: string,
 headers: RequestHeader = {},
 queryParams: RequestQueryParamInterface = {},
 data: any = null,
 withCredentials = true
) => {
 return axios<ResponseType>({
  method: method,
  url: `${DefaultRequestSettings.BaseUrl}${url}?${parseQueryParam(queryParams)}`,
  headers: {
   ...clear(DefaultRequestSettings.Headers),
   ...headers,
   "x-csrftoken": localStorage.getItem("token"),
  },
  withCredentials: withCredentials,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "csrftoken",
  data: data,
 });
};

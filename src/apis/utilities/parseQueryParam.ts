import { DefaultRequestSettings } from "./requests";
import { RequestQueryParamInterface } from "./types";

export const parseQueryParam = (
  queryParams: RequestQueryParamInterface = {}
): string => {
  let params = {
    ...DefaultRequestSettings.queryParams,
    ...queryParams,
  };

  let validParams = Object.keys(params).filter((key) => {
    return (params as any)[key] || (params as any)[key] == 0;
  });

  return validParams
    .map((key) => {
      if (Array.isArray((params as any)[key]))
        return `${key}=${((params as any)[key] as Array<number | string>).join(
          ","
        )}`;

      return `${key}=${(params as any)[key]}`;
    })
    .join("&");
};

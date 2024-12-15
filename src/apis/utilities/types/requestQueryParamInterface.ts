import { RequestFilters } from "./requestFilters";

export interface RequestQueryParamInterface {
    [key: string]: string|number|string[]|number[]|boolean|null|undefined|RequestFilters|RequestFilters[];
}

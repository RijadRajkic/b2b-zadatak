import { httpGet } from "../utilities";
import { ColumnNames } from "../../models";

export const httpGetPasswordColumns = async () => {
 return httpGet<ColumnNames[]>(`kolone`);
};

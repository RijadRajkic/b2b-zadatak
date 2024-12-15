import { httpGet } from "../utilities";

interface HttpGetPasswordColumns {
 total: number;
}

export const httpGetPasswordColumns = async () => {
 return httpGet<HttpGetPasswordColumns>(`/kolone`);
};

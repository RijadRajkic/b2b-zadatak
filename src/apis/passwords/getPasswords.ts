import { httpGet } from "../utilities";
import { Password } from "../../models";

export const httpGetPasswords = async () => {
 return httpGet<Password[] | undefined>(`sifre`);
};

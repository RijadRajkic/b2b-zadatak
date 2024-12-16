import { httpGetPasswords, httpGetPasswordColumns } from "../../apis";
import toast from "react-hot-toast";

export const fetchPasswords = async (
 setPasswords: React.Dispatch<React.SetStateAction<any>>,
 setFilteredPasswords: React.Dispatch<React.SetStateAction<any>>
) => {
 try {
  const response = await httpGetPasswords();
  setPasswords(response.data);
  setFilteredPasswords(response.data);
 } catch (err) {
  toast.error("Error fetching passwords!");
  console.error("Error fetching passwords:", err);
 }
};

export const fetchColumns = async (setColumns: React.Dispatch<React.SetStateAction<any>>) => {
 try {
  const response = await httpGetPasswordColumns();
  setColumns(response.data);
 } catch (err) {
  toast.error("Error fetching columns!");
  console.error("Error fetching columns", err);
 }
};

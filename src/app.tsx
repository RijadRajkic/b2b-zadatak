import { useEffect, useState } from "react";
import { httpGetPasswords } from "./apis";
import { Password } from "./models";
import { DataGrid } from "devextreme-react/data-grid";
import { FlexContainer, TitleXXL, BaseInput } from "./components";

import "devextreme/dist/css/dx.light.css";

function App() {
 const [passwords, setPasswords] = useState<Password[]>();
 const [filteredPasswords, setFilteredPasswords] = useState<Password[]>();
 const [search, setSearch] = useState<string>("");

 const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

 const fetchPasswords = async () => {
  try {
   const response = await httpGetPasswords();
   setPasswords(response.data);
   setFilteredPasswords(response.data);
  } catch (err) {
   console.error("Error fetching passwords:", err);
  }
 };

 useEffect(() => {
  fetchPasswords();
 }, []);

 useEffect(() => {
  const timer = setTimeout(() => {
   setDebouncedSearch(search);
  }, 1000);

  return () => clearTimeout(timer);
 }, [search]);

 const removeSpaces = (str: string) => {
  return str.replace(/\s+/g, "").toLowerCase();
 };

 useEffect(() => {
  if (!Array.isArray(passwords)) {
   console.error("Something went wrong: passwords is not an array");
   return;
  }

  if (debouncedSearch.length >= 3 && passwords.length > 0) {
   const lowerSearch = removeSpaces(debouncedSearch);
   const filteredData = passwords.filter((password) => {
    return (
     removeSpaces(password.klasifikacija ?? "").includes(lowerSearch) ||
     removeSpaces(password.naziv ?? "").includes(lowerSearch) ||
     removeSpaces(password.karakteristikaA ?? "").includes(lowerSearch) ||
     removeSpaces(password.karakteristikaB ?? "").includes(lowerSearch) ||
     removeSpaces(password.karakteristikaC ?? "").includes(lowerSearch) ||
     removeSpaces(password.karakteristikaD ?? "").includes(lowerSearch) ||
     removeSpaces(password.karakteristikaE ?? "").includes(lowerSearch)
    );
   });
   setFilteredPasswords(filteredData);
  } else {
   setFilteredPasswords(passwords);
  }
 }, [debouncedSearch, passwords]);

 return (
  <FlexContainer flexDirection="column" gap="32px">
   <TitleXXL>Passwords</TitleXXL>
   <FlexContainer flexDirection="row" dimensions={{ maxWidth: "16rem", maxHeight: "32rem" }}>
    <BaseInput
     placeholder="Search..."
     value={search}
     onChange={async (e) => {
      setSearch(e.target.value);
     }}
     dimensions={{ width: "100%", height: "32px" }}
    />
   </FlexContainer>
   <DataGrid id="dataGrid" dataSource={filteredPasswords} />
  </FlexContainer>
 );
}

export default App;

import { useEffect, useState } from "react";
import { httpGetPasswords, httpGetPasswordColumns } from "./apis";
import { Password } from "./models";
import { DataGrid } from "devextreme-react/data-grid";
import {
 FlexContainer,
 TitleXXL,
 BaseInput,
 SidebarContainer,
 UnselectedSection,
 SelectedSection,
 ColumnItem,
} from "./components";
import "devextreme/dist/css/dx.light.css";

const App = () => {
 const [passwords, setPasswords] = useState<Password[]>();
 const [filteredPasswords, setFilteredPasswords] = useState<Password[]>();
 const [columns, setColumns] = useState<string[]>([]);
 const [visibleColumns, setVisibleColumns] = useState<string[]>([
  "id",
  "naziv",
  "klasifikacija",
  "karakteristikaA",
  "karakteristikaB",
 ]);
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

 const fetchColumns = async () => {
  try {
   const response = await httpGetPasswordColumns();
   setColumns(response.data);
  } catch (err) {
   console.error("Error fetching columns", err);
  }
 };

 useEffect(() => {
  fetchPasswords();
  fetchColumns();
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
    return visibleColumns.some((column) => {
     const value = password[column as keyof Password];
     return value && removeSpaces(value).includes(lowerSearch);
    });
   });
   setFilteredPasswords(filteredData);
  } else {
   setFilteredPasswords(passwords);
  }
 }, [debouncedSearch, passwords, visibleColumns]);

 const toggleColumn = (column: string) => {
  if (visibleColumns.includes(column)) {
   // Remove the column
   setVisibleColumns(visibleColumns.filter((col) => col !== column));
  } else {
   // Add the column back in its original order
   const columnIndex = columns.indexOf(column);
   const updatedColumns = [...visibleColumns];
   updatedColumns.splice(columnIndex, 0, column);
   setVisibleColumns(updatedColumns);
  }
 };

 const tableColumns = visibleColumns.map((column) => ({
  dataField: column,
 }));

 const unselectedColumns = columns.filter((col) => !visibleColumns.includes(col));

 return (
  <FlexContainer flexDirection="column" gap="32px" padding="16px">
   <FlexContainer justifyContent="space-between">
    <TitleXXL>Passwords</TitleXXL>
    <BaseInput
     placeholder="Search..."
     value={search}
     onChange={async (e) => {
      setSearch(e.target.value);
     }}
     dimensions={{ width: "32rem", height: "32px" }}
    />
   </FlexContainer>
   <FlexContainer flexDirection="row" gap="32px" dimensions={{ maxHeight: "50%" }}>
    <DataGrid id="dataGrid" dataSource={filteredPasswords} columns={tableColumns} />
    <SidebarContainer>
     <UnselectedSection>
      {unselectedColumns.map((column) => (
       <ColumnItem key={column} isSelected={false} onDoubleClick={() => toggleColumn(column)}>
        {column}
       </ColumnItem>
      ))}
     </UnselectedSection>
     <SelectedSection>
      {visibleColumns.map((column) => (
       <ColumnItem key={column} isSelected={true} onDoubleClick={() => toggleColumn(column)}>
        {column}
       </ColumnItem>
      ))}
     </SelectedSection>
    </SidebarContainer>
   </FlexContainer>
  </FlexContainer>
 );
};

export default App;

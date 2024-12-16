import { useEffect, useState } from "react";

import {
 FlexContainer,
 TitleXXL,
 BaseInput,
 SidebarContainer,
 UnselectedSection,
 SelectedSection,
 ColumnItem,
} from "./components";
import { DataGrid } from "devextreme-react/data-grid";

import { Password } from "./models";
import { useColumns, useSearch } from "./hooks";
import { fetchPasswords, fetchColumns, onRowPrepared } from "./utilities";

import "devextreme/dist/css/dx.light.css";
import "./app.css";

const App = () => {
 const [passwords, setPasswords] = useState<Password[]>([]);
 const [columns, setColumns] = useState<string[]>([]);
 const [filteredPasswords, setFilteredPasswords] = useState<Password[]>([]);
 const [search, setSearch] = useState<string>("");
 const { visibleColumns, toggleColumn } = useColumns(columns);
 const filteredPasswordsResult = useSearch(passwords, search, visibleColumns);

 const tableColumns = visibleColumns.map((column) => ({
  dataField: column,
 }));

 const unselectedColumns = columns.filter((col) => !visibleColumns.includes(col));

 useEffect(() => {
  setFilteredPasswords(filteredPasswordsResult);
 }, [filteredPasswordsResult]);

 useEffect(() => {
  fetchPasswords(setPasswords, setFilteredPasswords);
  fetchColumns(setColumns);
 }, []);

 return (
  <FlexContainer flexDirection="column" gap="2rem" padding="1rem">
   <FlexContainer justifyContent="space-between">
    <TitleXXL>Passwords</TitleXXL>
    <BaseInput
     icon={
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path
        d="M27.9999 28L22.1999 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.7756 25.3333 4 20.5577 4 14.6667C4 8.7756 8.7756 4 14.6667 4C20.5577 4 25.3333 8.7756 25.3333 14.6667Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
       />
      </svg>
     }
     placeholder="Search..."
     value={search}
     onChange={async (e) => {
      setSearch(e.target.value);
     }}
     dimensions={{ width: "32rem", height: "2rem" }}
    />
   </FlexContainer>
   <FlexContainer flexDirection="row" gap="2rem" dimensions={{ maxHeight: "50%" }}>
    <DataGrid id="dataGrid" dataSource={filteredPasswords} columns={tableColumns} onRowPrepared={onRowPrepared} />
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

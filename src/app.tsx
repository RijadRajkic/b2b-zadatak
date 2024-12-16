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

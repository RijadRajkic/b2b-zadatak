import React from "react";
import { DataGrid } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";

function App() {
 const employeeData = [
  {
   id: 1,
   name: "John Doe",
   title: "Software Engineer",
   department: "Development",
   hireDate: "2018-01-15",
   salary: 70000,
  },
  {
   id: 2,
   name: "Jane Smith",
   title: "Project Manager",
   department: "Management",
   hireDate: "2017-03-10",
   salary: 85000,
  },
  { id: 3, name: "Samuel Green", title: "Designer", department: "Design", hireDate: "2020-05-22", salary: 60000 },
  {
   id: 4,
   name: "Lisa Brown",
   title: "Marketing Specialist",
   department: "Marketing",
   hireDate: "2019-08-13",
   salary: 75000,
  },
  {
   id: 5,
   name: "Michael White",
   title: "Product Owner",
   department: "Product",
   hireDate: "2015-11-30",
   salary: 95000,
  },
 ];

 return (
  <div className="App">
   <DataGrid id="dataGrid" dataSource={employeeData}></DataGrid>
  </div>
 );
}

export default App;

import { useState } from "react";

export const useColumns = (columns: string[]) => {
 const [visibleColumns, setVisibleColumns] = useState<string[]>([
  "id",
  "naziv",
  "klasifikacija",
  "karakteristikaA",
  "karakteristikaB",
 ]);

 const toggleColumn = (column: string) => {
  if (visibleColumns.includes(column)) {
   setVisibleColumns(visibleColumns.filter((col) => col !== column));
  } else {
   const columnIndex = columns.indexOf(column);
   const updatedColumns = [...visibleColumns];
   updatedColumns.splice(columnIndex, 0, column);
   setVisibleColumns(updatedColumns);
  }
 };

 return { visibleColumns, toggleColumn };
};

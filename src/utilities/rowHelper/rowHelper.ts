export const onRowPrepared = (e: any) => {
 if (e.rowType === "data") {
  const rowElement = e.rowElement;
  rowElement.addEventListener("mouseenter", () => {
   rowElement.classList.add("custom-hover");
  });
  rowElement.addEventListener("mouseleave", () => {
   rowElement.classList.remove("custom-hover");
  });
 }
};

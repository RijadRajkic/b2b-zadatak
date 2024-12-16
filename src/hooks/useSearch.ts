import { useState, useEffect } from "react";

const removeSpaces = (str: string) => {
 return str.replace(/\s+/g, "").toLowerCase();
};

export const useSearch = (passwords: any[], search: string, visibleColumns: string[]) => {
 const [debouncedSearch, setDebouncedSearch] = useState(search);
 const [filteredPasswords, setFilteredPasswords] = useState(passwords);

 useEffect(() => {
  const timer = setTimeout(() => {
   setDebouncedSearch(search);
  }, 1000);

  return () => clearTimeout(timer);
 }, [search]);

 useEffect(() => {
  if (!Array.isArray(passwords)) return;

  if (debouncedSearch.length >= 3 && passwords.length > 0) {
   const lowerSearch = removeSpaces(debouncedSearch);
   const filteredData = passwords.filter((password) => {
    return visibleColumns.some((column) => {
     const value = password[column];
     return value && removeSpaces(value).includes(lowerSearch);
    });
   });
   setFilteredPasswords(filteredData);
  } else {
   setFilteredPasswords(passwords);
  }
 }, [debouncedSearch, passwords, visibleColumns]);

 return filteredPasswords;
};

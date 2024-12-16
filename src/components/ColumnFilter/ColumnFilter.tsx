import styled from "styled-components";

export const SidebarContainer = styled.div`
 width: 250px;
 height: fit;
 padding: 1rem;
 background-color: #fff;
 display: flex;
 flex-direction: column;
 gap: 1rem;
`;

export const UnselectedSection = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 gap: 8px;
 padding: 8px;
`;

export const SelectedSection = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 gap: 8px;
 padding: 8px;
 border-top: 2px solid #ddd;
`;

export const ColumnItem = styled.div<{ isSelected: boolean }>`
 padding: 8px;
 border-radius: 4px;
 cursor: pointer;
 background-color: ${({ isSelected }) => (isSelected ? "#c8e6c9" : "#ffcdd2")};
 border: 1px solid ${({ isSelected }) => (isSelected ? "green" : "red")};
 &:hover {
  background-color: ${({ isSelected }) => (isSelected ? "#a5d6a7" : "#ffebee")};
 }
`;

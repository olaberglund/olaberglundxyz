import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  flex: 1;

`

export const SidebarElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  gap: 16px;

 
`
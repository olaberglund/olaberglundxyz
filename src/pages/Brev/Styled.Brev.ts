import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 80px;
  height: 100%;
`
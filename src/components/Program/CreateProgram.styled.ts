import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  background-color: #fff;
  list-style-type: none;
  height: 80%;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  color: #000;
  width: 100%;
  font-size: ${({theme}) => theme.textSize.small};
  padding: 10px;

  :hover {
    background-color: #000;
  }
`

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`
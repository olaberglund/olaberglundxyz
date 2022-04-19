import styled from "styled-components";

export const List = styled.ul`
  background-color: #fff;
  list-style-type: none;
  height: min-content;
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
    background-color: #ebecf0;
    cursor: pointer;
  }
`

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  * {
    flex: 1;
  }
`

export const Program = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const SchemeInput = styled.input`
  width: 20px;
`

export const Exercise = styled.li`
  padding: 10px;
`

export const Paper = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  color: #000;
  width: 50%;
`

import styled from "styled-components";

export const listStyles = {
  width: '40%',
  bgcolor: 'background.paper',
  color: '#000',
  borderRadius: 3,
  overflow: 'scroll',
  maxHeight: '400px',
};

export const List = styled.ul`
  background-color: #fff;
  list-style-type: none;
  max-height: 400px;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  color: #000;
  width: 100%;
  padding: 10px;
  font-size: ${({theme}) => theme.textSize.small};

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
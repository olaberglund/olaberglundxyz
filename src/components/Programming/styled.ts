import styled from "styled-components";

export const List = styled.ul`
  background-color: #fff;
  list-style-type: none;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  color: #000;
  width: 100%;
  font-size: ${({ theme }) => theme.textSize.small};
  padding: 10px;

  :hover {
    background-color: #ebecf0;
    cursor: pointer;
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  * {
    flex: 1;
  }
`;

export const Program = styled.ul`
  list-style-type: none;
  overflow: auto;
  max-height: 100%;
  color: #000;
  padding: 0;
  margin: 0;
`;

export const SchemeInput = styled.input`
  width: 20px;
`;

export const Exercise = styled.li`
  list-style-type: none;
  padding: 10px 10px 0 10px;
`;

export const Paper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #000;
  width: 100%;
`;


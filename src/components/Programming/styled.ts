import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  color: #000;
  flex: 1;
  /* 
    Below is a surprising css trick 
    to fix the dynamic height of this div
  */ 
  min-height: 0;
`;

export const List = styled.ul`
  background-color: #fff;
  list-style-type: none;
  overflow-y: scroll;
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
  flex-direction: column;
  gap: 10px;
  * {
    flex: 1;
  }
`;

export const Program = styled.ul`
  list-style-type: none;
  scrollbar-gutter: stable;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  color: #000;
  padding: 0;
  margin: 0;
`;

export const SchemeInput = styled.input`
  width: 40%;
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
  height: 100%;
`;


export const Title = styled.span`
  font-weight: 700;
  text-transform: capitalize;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemoveButton = styled.button`
  position: relative;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  padding: 0px;
  height: 20px;
  max-width: 20px;
  opacity: 0.3;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  :before, :after {
  position: absolute;
  content: '';
  top: 0px;
  height: 20px;
  width: 3px;
  background-color: red;
}
  :before {
  transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`
export const TabWindow = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  height: 100%;
`;

export const Tabs = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

interface TabProps {
  active: boolean;
}


export const WindowTab = styled.li<TabProps>`
  flex: 1;
  display: flex;
  place-content: center;
  padding: 10px;
  max-height: max-content;
  background-color: ${(p) => p.active ? p.theme.tertiary : p.theme.primary};
  :hover {
    background-color: ${({ theme }) => theme.tertiary};
    cursor: pointer;
  }
`;

export const ProgramWindow = styled(TabWindow)`
  color: ${({ theme }) => theme.text};
  flex: 3;
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  color: ${({ theme }) => theme.text.dark};
  flex: 1;
  height: 100%;
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
  color: ${({ theme }) => theme.text.dark};
  width: 100%;
  font-size: ${({ theme }) => theme.text.size.small};
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
  color: ${({ theme }) => theme.text.dark};
  list-style-type: none;
  scrollbar-gutter: stable;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
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
  color: ${({ theme }) => theme.text.dark};
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

type VerticalTabber = {
  vertical?: boolean,
}

export const TabWindow = styled.div<VerticalTabber>`
  display: flex;
  position: relative;
  flex-direction: ${(p) => p.vertical ? 'row' : 'column'};
  color: ${({ theme }) => theme.text.light};
  height: 100%;
  width: 100%;
`;

export const Tabs = styled.ul<VerticalTabber>`
  list-style-type: none;
  display: flex;
  flex-direction: ${(p) => p.vertical ? 'column' : 'row'};
  margin: 0;
  padding: 0;
  flex: ${(p) => p.vertical ? '1' : '0'};
`;

interface TabProps {
  active: boolean;
}


export const WindowTab = styled.li<TabProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  white-space: nowrap;
  max-height: max-content;
  background-color: ${(p) => p.active ? p.theme.color.tertiary : p.theme.color.primary};
  :hover {
    background-color: ${({ theme }) => theme.color.tertiary};
    cursor: pointer;
  }
`;

export const ProgramWindow = styled(TabWindow)`
  color: ${({ theme }) => theme.text};
  flex: 3;
`;
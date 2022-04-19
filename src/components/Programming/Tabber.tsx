import React, { useState } from "react";
import styled from "styled-components";
import { Paper } from "./styled";
import { Tab } from "./types";

type Props = {
  tabs: Tab[];
};

const Tabber: React.FC<Props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClick = (index: number) => () => setCurrentTab(index);

  return (
    <TabWindow>
      <Tabs>
        {tabs.map((tab, index) => (
          <WindowTab key={tab.title} onClick={handleClick(index)}>
            {tab.title}
          </WindowTab>
        ))}
      </Tabs>
      <Paper>{tabs[currentTab].content}</Paper>
    </TabWindow>
  );
};

export default Tabber;

export const TabWindow = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export const Tabs = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const WindowTab = styled.li`
  flex: 1;
  display: flex;
  place-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  :hover {
    background-color: ${({ theme }) => theme.tertiary};
    cursor: pointer;
  }
`;

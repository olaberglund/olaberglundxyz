import React, { useState } from 'react';
import styled from 'styled-components';
import {Tabs, TabWindow, WindowTab } from './styled';
import { Tab } from './types';

type Props = {
  tabs: Tab[];
  vertical?: boolean;
};

const Tabber: React.FC<Props> = ({ tabs, vertical }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClick = (index: number) => () => setCurrentTab(index);

  return (
    <TabWindow vertical={vertical}>
      <Tabs vertical={vertical}>
        {tabs.map((tab, index) => (
          <WindowTab
            active={currentTab === index}
            key={tab.title}
            onClick={handleClick(index)}
          >
            {tab.title}
          </WindowTab>
        ))}
      </Tabs>
      <Line />
      {tabs[currentTab].content}
    </TabWindow>
  );
};

const Line = styled.hr`
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid white;
`;

export default Tabber;


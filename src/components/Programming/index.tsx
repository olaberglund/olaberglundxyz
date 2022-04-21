import React from 'react';
import styled from 'styled-components';
import ProgramForm from './ProgramForm';
import Tabber from './Tabber';
import { Tab } from './types';

const Programming: React.FC = () => {

  const tabs: Tab[] = [
    {
      title: "Nytt",
      content: <ProgramForm />,
    },
    {
      title: "Översikt",
      content: <p>En översikt</p>,
    }
  ]


  return (
    <Wrapper>
      <Border radius={10}>
        <Tabber tabs={tabs} />
      </Border>
      <SaveButton type="button">Vidare</SaveButton>
    </Wrapper>
  )
}

interface BorderProps {
  radius: number;
}

const Border = styled.div<BorderProps>`
  width: 100%;
  height: 70%;
  max-height: 700px;
  border: 1px solid white;
  border-top-left-radius: ${(p) => `${p.radius}px`};
  border-top-right-radius: ${(p) => `${p.radius}px`};
  & > div > ul {
    li:first-child {
      border-top-left-radius: ${(p) => `${p.radius}px`};
    }
    
    li:last-child {
      border-top-right-radius: ${(p) => `${p.radius}px`};
    }
  }
`

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  gap: 20px;
`;

const SaveButton = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.textSize.small};
  border-radius: 20px;
  border: none;
  padding: 8px 20px 8px 20px;
  background-color: ${({ theme }) => theme.quaternary};

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hover.quaternary};
  }
`;

export default Programming;

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
  max-height: 700px;
  height: 80%;
  min-height: 0;
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
  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    flex: 1;
  }
`

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 90%;
  }
`;

const SaveButton = styled.button`
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.text.size.small};
  border-radius: 20px;
  border: none;
  padding: 8px 20px 8px 20px;
  background-color: ${({ theme }) => theme.color.quaternary};

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.quaternary};
  }
`;

export default Programming;

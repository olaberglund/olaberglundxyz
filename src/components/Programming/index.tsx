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
      <Tabber tabs={tabs} />
      <SaveButton type="button">Spara</SaveButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 20px;
  & > div > ul {
    li:first-child {
      border-top-left-radius: 10px;
    }
    
    li:last-child {
      border-top-right-radius: 10px;
    }
  }
`

const SaveButton = styled.button`
  width: 10%;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.textSize.small};
  border-radius: 20px;
  border: none;
  padding: 0 12px 0 12px;
  height: 40px;
  background-color: ${({ theme }) => theme.quaternary};

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hover.quaternary};
  }
`

export default Programming;

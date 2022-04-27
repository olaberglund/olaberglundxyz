import React from 'react';
import styled from 'styled-components';
import ProgramStepper from './ProgramStepper';

const Programming: React.FC = () => {

  return (
    <Wrapper>
      <MobileWrapper>
        <Border radius={10}>
          <ProgramStepper />
        </Border>
      </MobileWrapper>
    </Wrapper>
  )
}

interface BorderProps {
  radius: number;
}

const MobileWrapper = styled.div`
  display: contents;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    flex: 1;
    min-height: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
`

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
    height: 95%;
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

export default Programming;

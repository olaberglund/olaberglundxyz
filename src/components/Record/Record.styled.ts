import styled, { keyframes } from 'styled-components'
import record from './record-trans-bg.png'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const RecordWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    p {
      opacity: 1;
    }
  }
`

export const StyledRecord = styled.div`
  background-image: url(${record});
  background-size: cover;
  width: 120px;
  height: 120px;

  + p {
   pointer-events: none;
   transition: 0.5s;
  }

  :hover {
    animation: ${spin} 1s linear infinite;
    + p {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
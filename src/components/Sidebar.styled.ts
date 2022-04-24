import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 20px;

  & > :last-child {
    border-bottom-right-radius: 10px;
  }

  & > :first-child {
    border-top-right-radius: 10px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    flex-direction: row;
    & > :last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 0px;
    }

    & > :first-child {
      border-top-right-radius: 0px;
      border-top-left-radius: 10px;
    }

    width: 100%;
    margin-right: 0px;
  }
`
export const SidebarElement = styled(Link)`
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideUpFromBottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text.light};
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.primary};
  gap: 12px;
  padding: 10px;
  width: 100%;
  animation: 0.3s ease-out slideInFromLeft;

  :hover {
    background-color: ${({ theme }) => theme.color.tertiary};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    animation: 0.3s ease-out slideUpFromBottom;
  }
`
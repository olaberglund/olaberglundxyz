import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  & > :last-child {
    border-bottom-right-radius: 10px;
  }

  & > :first-child {
    border-top-right-radius: 10px;
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

  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  background-color: ${({ theme }) => theme.primary};
  gap: 12px;
  width: 100%;
  padding: 10px;
  animation: 0.3s ease-out slideInFromLeft;

  :hover {
    background-color: ${({ theme }) => theme.tertiary};
  }
`
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface NavbarLinkProps {
  size: "normal" | "large"
}

export const StyledLink = styled(NavLink)<NavbarLinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    text-decoration-color: #AD7D62;
  }

  :hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: #AD7D62;
    transition: 300ms;
  }
`
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

export const StyledLoginButton = styled.button`
  justify-self: end;
  border-color: ${({ theme }) => theme.text};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.text.size.small};
  border-style: solid;
  border-radius: 20px;
  border-width: 1px;
  padding: 0 12px 0 12px;
  height: 40px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`

export const Desktop = styled.div`
  display: contents;
`;

export const LogoutButton = styled.button`
  justify-self: end;
  border-color: ${({ theme }) => theme.text};
  background-color: transparent;
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.text.size.small};
  border-style: solid;
  border-radius: 20px;
  border-width: 1px;
  padding: 0 12px 0 12px;
  height: 40px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 100%;
  height: 50px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

interface NavbarLinkProps {
  size: "normal" | "large",
  disabled: boolean
}

export const StyledLink = styled(NavLink) <NavbarLinkProps>`
  text-decoration: none;
  color: ${({ theme, disabled }) => disabled ? '#949494' : theme.text.light};
  font-size: ${({ size }) => size === "normal" ? theme.text.size.medium : theme.text.size.large};
  
  :hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }

  &.active::after, 
  :hover::after {
      width: 100%;
  }
  
  &::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: ${({ disabled }) => disabled ? '#949494' : '#AD7D62'};
    transition: width 300ms;
  }
`
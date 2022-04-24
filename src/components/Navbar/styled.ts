import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import theme from '../../styles/theme'

export const LoginButton = styled.button`
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

  :hover {
    cursor: pointer;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    border: none;
    margin: 0;
  }
`;

export const LogoutButton = styled(LoginButton)`
  color: ${({ theme }) => theme.text.light};
  font-size: ${({ theme }) => theme.text.size.small};
`

interface NavWrapperProps {
  mobileActive: boolean;
}

export const NavWrapper = styled.div<NavWrapperProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  hr {
    display: none;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    /* display: ${(p) => p.mobileActive && 'none'}; */
    opacity: ${(p) => p.mobileActive ? '0' : '1'};
    background-color: ${({ theme }) => theme.color.primary};
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    position: absolute;
    padding: 5px;
    width: auto;
    border: 1px solid white;
    top: 100%;
    z-index: 1;
    transition: opacity 0.2s;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 4px 10px 4px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    position: relative;
    flex-direction: column;
    align-items: flex-end;
  }
`

interface NavbarLinkProps {
  size: "normal" | "large",
  disabled: boolean
}

export const StyledLink = styled(NavLink) <NavbarLinkProps>`
  text-decoration: none;
  color: ${({ theme, disabled }) => disabled ? '#949494' : theme.text.light};
  font-size: ${({ size }) => size === "normal" ? theme.text.size.medium : theme.text.size.large};
  margin-left: 5%;
  
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
  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.text.size.medium};
  }
`
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: contents;
  }
`;

export const NavBurger = styled.button`
  display: none;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
    justify-self: end;
    border-color: ${({ theme }) => theme.text.light};
    color: ${({ theme }) => theme.text.light};
    font-size: ${({ theme }) => theme.text.size.small};
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    padding: 12px;
    background-color: ${({ theme }) => theme.color.quaternary};
    z-index: 1;
  }
`;
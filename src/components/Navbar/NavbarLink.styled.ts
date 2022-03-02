import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../styles/theme'

interface NavbarLinkProps {
  size: "normal" | "large"
}

export const StyledLink = styled(NavLink) <NavbarLinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${({size}) => size === "normal" ? theme.textSize.normal : theme.textSize.large };

  &.active::after, 
  :hover::after {
      width: 100%;
  }
  
  &::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: #AD7D62;
    transition: width 300ms;
  }
`
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../styles/theme'

interface NavbarLinkProps {
  size: "normal" | "large",
  disabled: boolean
}

export const StyledLink = styled(NavLink) <NavbarLinkProps>`
  text-decoration: none;
  color: ${({ theme, disabled }) => disabled ? '#949494' : theme.text};
  font-size: ${({size}) => size === "normal" ? theme.textSize.normal : theme.textSize.large };
  
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
    background: ${({disabled}) => disabled ? '#949494' : '#AD7D62'};
    transition: width 300ms;
  }
`
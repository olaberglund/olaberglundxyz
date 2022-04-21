import React from 'react'
import { StyledLink } from './styled'

interface NavbarLinkProps {
  title: string,
  href: string,
  disabled: boolean,
  size: "normal" | "large"
}

function NavbarLink({ title, href, size, disabled }: NavbarLinkProps) {

  return (
    <StyledLink onClick={(e) => disabled && e.preventDefault()} disabled={disabled} size={size} to={href}>{title}</StyledLink>
  )
}

export default NavbarLink
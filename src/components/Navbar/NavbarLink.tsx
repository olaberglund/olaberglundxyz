import React from 'react'
import { StyledLink } from './NavbarLink.styled'

interface NavbarLinkProps {
  title: string,
  href: string,
  size: "normal" | "large"
}

function NavbarLink({ title, href, size } : NavbarLinkProps) {
  return (
    <StyledLink size={size} to={href}>{title}</StyledLink>
  )
}

export default NavbarLink
import React from 'react'
import { StyledContainer, StyledNav } from './Navbar.styled'
import NavbarLink from './NavbarLink'

function Navbar() {

  const links = [
    { title: 'Home', href: '/' },
    { title: 'Brev', href: '/brev' },
    { title: 'Aktuellt', href: '/aktuellt' }
  ]

  return (
    <StyledContainer>
      <StyledNav>
        {links.map(link => (
          <NavbarLink size="normal" title={link.title} href={link.href} />
        ))}
      </StyledNav>
    </StyledContainer>
  )
}

export default Navbar
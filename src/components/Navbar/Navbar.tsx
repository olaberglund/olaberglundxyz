import React from 'react'
import { StyledContainer, StyledNav } from './Navbar.styled'
import NavbarLink from './NavbarLink'

function Navbar() {

  const links = [
    { title: 'Hem', href: '/', size: 'large' as 'large' },
    { title: 'Brev', href: '/brev', size: 'normal' as 'normal' },
    { title: 'Aktuellt', href: '/aktuellt', size: 'normal' as 'normal' },
    { title: 'Träning', href: '/traning', size: 'normal' as 'normal' }
  ]

  return (
    <StyledContainer>
      <StyledNav>
        {links.map(link => (
          <NavbarLink key={link.title} size={link.size} title={link.title} href={link.href} />
        ))}
      </StyledNav>
    </StyledContainer>
  )
}

export default Navbar
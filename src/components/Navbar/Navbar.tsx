import React, { useContext } from 'react'
import { UserContext } from '../../lib/firebase/context'
import UserStatusButton from './UserStatusButton'
import { StyledContainer, StyledNav } from './Navbar.styled'
import NavbarLink from './NavbarLink'

function Navbar() {
  const { name } = useContext(UserContext);

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
      { name && <UserStatusButton /> }
    </StyledContainer>
  )
}

export default Navbar
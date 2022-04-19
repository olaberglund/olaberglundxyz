import React, { useContext } from 'react'
import { UserContext } from '../../lib/firebase/context'
import UserStatusButton from './UserStatusButton'
import { StyledContainer, StyledNav } from './Navbar.styled'
import NavbarLink from './NavbarLink'

function Navbar() {
  const { user } = useContext(UserContext);

  type link = {
    title: string
    href: string
    size: 'large' | 'normal'
    disabled: boolean
  }

  const links: link[] = [
    { title: 'Hem', href: '/', size: 'large' as 'large', disabled: false },
    { title: 'Brev', href: '/brev', size: 'normal' as 'normal', disabled: Boolean(!user) },
    { title: 'Träning', href: '/traning', size: 'normal' as 'normal', disabled: Boolean(!user) }
  ]

  return (
    <StyledContainer>
      <StyledNav>
        {links.map(link => (
          <NavbarLink disabled={link.disabled} key={link.title} size={link.size} title={link.title} href={link.href} />
        ))}
      </StyledNav>
      <UserStatusButton />
    </StyledContainer>
  )
}

export default Navbar
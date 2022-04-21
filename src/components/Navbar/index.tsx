import React, { useContext } from 'react'
import { UserContext } from '../../lib/firebase/context'
import UserStatusButton from './UserStatusButton'
import NavbarLink from './NavbarLink'
import { GridContainer, Nav } from './styled';

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
    <GridContainer>
      <Nav>
        {links.map(link => (
          <NavbarLink disabled={link.disabled} key={link.title} size={link.size} title={link.title} href={link.href} />
        ))}
      </Nav>
      <UserStatusButton />
    </GridContainer>
  )
}

export default Navbar
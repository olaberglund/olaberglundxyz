import React, { useContext, useState } from 'react'
import { UserContext } from '../../lib/firebase/context'
import UserStatusButton from './UserStatusButton'
import NavbarLink from './NavbarLink'
import { NavWrapper, Nav, NavLinks, NavBurger } from './styled';
import styled from 'styled-components';

function Navbar() {
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);

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
    <Nav>
      <NavBurger onClick={() => setDisabled(!disabled)}>{disabled ? '=' : 'X'}</NavBurger>
      <NavWrapper mobileActive={disabled}>
        <NavLinks>
          {links.map(link => (
            <NavbarLink disabled={link.disabled} key={link.title} size={link.size} title={link.title} href={link.href} />
          ))}
        </NavLinks>
        <Line />
        <UserStatusButton />
      </NavWrapper>
    </Nav>
  )
}

const Line = styled.div`
  display: none;  

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}){
    display: block;
    width: 100%;
    border-top: 1px solid white;
    margin-top: 5px;
  }
`;

export default Navbar
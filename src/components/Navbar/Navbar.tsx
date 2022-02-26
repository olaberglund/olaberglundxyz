import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer, StyledLink } from './Navbar.styled'

function Navbar() {

  const links = [
    { title: 'Home', href: '/' },
    { title: 'Brev', href: '/brev' },
    { title: 'Aktuellt', href: '/aktuellt' }
  ]

  return (
    <StyledContainer>
      <nav>
        { links.map(link => (
          <Button component={Link} to={link.href} variant="outlined">{link.title}</Button>
        ))}
      </nav>
    </StyledContainer>
  )
}

export default Navbar
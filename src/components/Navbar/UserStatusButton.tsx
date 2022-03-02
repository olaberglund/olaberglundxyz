import React, { useContext } from 'react'
import { signInWithGoogle, signOut } from '../../lib/firebase/auth'
import { UserContext } from '../../lib/firebase/context'
import { StyledLoginButton, StyledLogoutButton } from './LoginButton.styled'

function UserStatusButton() {
  const { name } = useContext(UserContext);

  return (
    Boolean(name) ?
      <StyledLogoutButton onClick={signOut}>Logga ut {name}</StyledLogoutButton>
      :
      <StyledLoginButton onClick={signInWithGoogle}>Logga in</StyledLoginButton>
  )

}

export default UserStatusButton;
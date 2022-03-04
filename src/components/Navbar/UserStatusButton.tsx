import React, { useContext } from 'react'
import { signInWithGoogle, signOutUser } from '../../lib/firebase/auth'
import { UserContext } from '../../lib/firebase/context'
import { StyledLoginButton, StyledLogoutButton } from './LoginButton.styled'

function UserStatusButton() {
  const { user } = useContext(UserContext);

  return (
    user ?
      <StyledLogoutButton onClick={signOutUser}>Logga ut {user.displayName}</StyledLogoutButton>
      :
      <StyledLoginButton onClick={signInWithGoogle}>Logga in</StyledLoginButton>
  )

}

export default UserStatusButton;
import React, { useContext } from 'react'
import { signInWithGoogle, signOutUser } from '../../lib/firebase/auth'
import { UserContext } from '../../lib/firebase/context'
import { LogoutButton, StyledLoginButton } from './styled';

function UserStatusButton() {
  const { user } = useContext(UserContext);

  return (
    user ?
      <LogoutButton onClick={signOutUser}>Logga ut {user.displayName}</LogoutButton>
      :
      <StyledLoginButton onClick={signInWithGoogle}>Logga in</StyledLoginButton>
  )

}

export default UserStatusButton;
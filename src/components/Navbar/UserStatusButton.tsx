import React, { useContext } from 'react'
import { signInWithGoogle, signOutUser } from '../../lib/firebase/auth'
import { UserContext } from '../../lib/firebase/context'
import { LogoutButton, LoginButton } from './styled';

function UserStatusButton() {
  const { user } = useContext(UserContext);

  return (
    user ?
      <LogoutButton onClick={signOutUser}>Logga ut</LogoutButton>
      :
      <LoginButton onClick={signInWithGoogle}>Logga in</LoginButton>
  )

}

export default UserStatusButton;
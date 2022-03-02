import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from './firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';


export const useUserData = () => {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null);

  useEffect(() => {
    //realtime subscription
    let unsubscribe; 

    if(user) {
      const ref = doc(db, 'users', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.name);
      })
    }else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user])

  return username;
}
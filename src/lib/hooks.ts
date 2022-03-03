import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from './firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { User } from 'firebase/auth';


export const useUserData = (): [string | null, User | null | undefined, boolean] => {
  const [user, loading, error] = useAuthState(auth)
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    //realtime subscription
    let unsubscribe;
    //user variable changed and will initially be null during load
    //so use previous username if there is one
    setUsername(localStorage.getItem('name'));

    // new user has successfully logged in
    if (user) {
      const ref = doc(db, 'users', user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        const uname = doc.data()?.name;
        localStorage.setItem('name', uname);
        setUsername(uname);
      })
    } else {
      // no user and auth isn't loading, therefore definitely logged out
      if (!loading) {
        setUsername(null)
        localStorage.removeItem('name');
      }
    }


    return unsubscribe;
  }, [user]);

  return [username, user, loading];
}
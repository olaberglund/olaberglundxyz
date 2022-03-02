import { getAuth, signOut, signInWithPopup } from "firebase/auth";
import { provider } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "./schemes";


const auth = getAuth();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      console.log("i was run");
      await setDoc(userRef, {
        name: user.displayName ?? user.email
      } as User);
    } else {
      return;
    }
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

export const signOutUser = async () => {
  await signOut(auth)
}

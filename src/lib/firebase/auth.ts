import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "./firebase";

export const signInWithGoogle = async () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

export const signOut = () => {

}

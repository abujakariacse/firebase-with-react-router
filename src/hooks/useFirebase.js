import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    // return [user, setUser];
    return { user, signInWithGoogle }
}
export default useFirebase;
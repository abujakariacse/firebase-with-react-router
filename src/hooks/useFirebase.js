import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});
    const handleSignInWithGoogle = () => {
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
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })

    }, [])
    // return [user, setUser];
    return { user, handleSignInWithGoogle, handleSignOut }
}
export default useFirebase;
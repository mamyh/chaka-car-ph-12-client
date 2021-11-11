import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializingApp from "../firebase/firebase.init";

initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');
    const auth = getAuth();
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider).then((result) => setUser(result.user)).catch((error) => setError(error.message));
    }

    const registration = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password).then((result) => { setUser(result.user); updateProfile(auth.currentUser, { displayName: name }) }).catch((error) => setError(error.message));
    }

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(result => setUser(result.user)).catch(error => setError(error.message));
    }

    const logOut = () => {
        signOut(auth).then(() => setUser({})).catch((error) => setError(error.message)).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, user => {
            if (user) {
                var newUser = auth.currentUser;

                setUser(newUser);

            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unSubscriber;
    }, [auth]);
    return {
        user, isLoading, error, registration, loginWithEmailPassword, signInWithGoogle, logOut
    }
}

export default useFirebase;
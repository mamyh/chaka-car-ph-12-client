import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializingApp from "../firebase/firebase.init";

initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInWithGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {

            const destination = location?.state?.from?.state || '/';
            setUser(result.user);
            console.log(destination);
            history.push(destination);

        }).catch((error) => setError(error.message));
    }

    const registration = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
            updateProfile(auth.currentUser, { displayName: name }).then(() => history.push('/'))
        }).catch((error) => setError(error.message));
    }

    const login = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password).then(result => {
            const destination = location?.state?.from || '/';
            console.log(destination)
            setUser(result.user);
            history.push(destination);
        }).catch(error => setError(error.message));
    }

    const logout = () => {
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
        user, isLoading, error, registration, login, signInWithGoogle, logout
    }
}

export default useFirebase;
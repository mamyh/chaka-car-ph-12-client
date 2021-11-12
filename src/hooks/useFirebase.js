import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializingApp from "../firebase/firebase.init";

initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInWithGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {

            const destination = location?.state?.from?.state || '/';
            setUser(result.user);
            saveUser(auth.currentUser.email, auth.currentUser.displayName, 'POST');
            history.push(destination);

        }).catch((error) => setError(error.message));
    }

    const registration = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
            updateProfile(auth.currentUser, { displayName: name }).then(() => {

                saveUser(auth.currentUser.email, auth.currentUser.displayName, 'POST');
                history.push('/');

            })
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
    //save(post of put) the user
    const saveUser = (email, displayName, method) => {
        const data = { email, displayName };
        console.log(data);
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => console.log(data))
    }
    //chck if then logged in user is admin
    useEffect(() => {
        fetch('http://localhost:5000/users/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        }).then(res => res.json()).then(data => {
            setIsAdmin(data.isAdmin);
        });
    }, [user.email]);
    //observer
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
        user, isLoading, error, isAdmin, registration, login, signInWithGoogle, logout
    }
}

export default useFirebase;
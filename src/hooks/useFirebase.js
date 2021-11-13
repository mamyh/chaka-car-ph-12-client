import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializingApp from "../firebase/firebase.init";

initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {

            const destination = location?.state?.from?.state || '/dashboard';
            setUser(result.user);
            saveUser(auth.currentUser.email, auth.currentUser.displayName, 'POST');
            history.push(destination);

        }).catch((error) => setError(error.message)).finally(() => setIsLoading(false));
    }

    const registration = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
            updateProfile(auth.currentUser, { displayName: name }).then(() => {

                saveUser(auth.currentUser.email, auth.currentUser.displayName, 'POST');
                history.push('/dashboard');

            })
        }).catch((error) => setError(error.message)).finally(() => setIsLoading(false));
    }

    const login = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password).then(result => {
            const destination = location?.state?.from || '/dashboard';
            setUser(result.user);
            history.push(destination);
        }).catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
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
        setIsLoading(true);
        fetch('http://localhost:5000/users/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        }).then(res => res.json()).then(data => {
            if (data.role === 'admin') {

                setIsAdmin(true);

            }
            setIsLoading(false)
        });
    }, [user.email]);
    //observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, user => {
            setIsLoading(true);
            if (user) {
                var newUser = auth.currentUser;

                setUser(newUser);

            } else {
                setUser({});

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
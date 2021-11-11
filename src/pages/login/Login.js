import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { state } = useLocation();
    const { allContext } = useAuth();
    const { loginWithEmailPassword, error } = allContext;
    const [userError, setUserError] = useState('');
    const history = useHistory();
    const redirectPath = state?.from.pathname || '/home';

    const { signInWithGoogle } = allContext;
    const handleLogin = () => {
        signInWithGoogle().finally(() => history.push(redirectPath));
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;


        if (error) {
            setUserError(error);
            return;
        }
        loginWithEmailPassword(email, password).finally(() => history.push(redirectPath));
    }
    return (
        <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Your Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" value="Jane Doe" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Your Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                </div>
            </div>

            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Login;

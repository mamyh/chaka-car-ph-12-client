import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const { loginWithEmailPassword, error, signInWithGoogle } = useAuth();

    const [info, setInfo] = useState({})
    const [loginError, setLoginError] = useState('');
    const history = useHistory();
    const handleLoginWithGoogle = () => {
        signInWithGoogle(location, history);
    }
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...info };
        newInfo[field] = value;

        setInfo(newInfo)
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        // const email = e.target[0].value;
        // const password = e.target[1].value;


        if (error) {
            setLoginError(error);
            return;
        }
        loginWithEmailPassword(info.email, info.password, location, history);
    }
    return (
        <form className="w-full max-w-sm" onSubmit={handleLoginWithEmail}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Your Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" onBlur={handleBlur} name='email' type="email" value={info.email} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Your Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" onBlur={handleBlur} name="password" type="password" />
                </div>
            </div>

            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Login;

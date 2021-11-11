import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const { allContext } = useAuth();
    const history = useHistory();
    const { error, registration } = allContext;
    const [userError, setUserError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const cpassword = e.target[3].value;
        if (password.length < 6) {
            setUserError('password must be 6 or more than 6 character');
            return;

        }
        if (password !== cpassword) {
            console.log(password, cpassword)
            setUserError('passwords dont matched');
            return;
        }
        if (error) {
            setUserError(error);
            return;
        }
        registration(email, password, name).finally(() => history.push('/'));

    }
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div className=" bg-yellow-100 p-20 border hover:shadow-md border-gray-300">
                <h1 className="pb-8"> Please Register Yourself </h1 >
                <form className=" border-b-2 border-gray-500" onSubmit={handleRegister}>
                    <label htmlFor="name" className="block pb-4">
                        Your Name :</label>
                    <input className="bg-white border p-2 border-gray-300" type="text" id="name" placeholder="your Name" required />
                    <label htmlFor="email" className="block pb-4">
                        Email :</label>
                    <input className="bg-white border p-2 border-gray-300" type="email" id="email" placeholder="your email" required />

                    <label htmlFor="password" className="block pb-4">
                        Password :</label>
                    <input className="bg-white border p-2 border-gray-300" type="password" id="password" placeholder="your password" required />
                    <label htmlFor="cpassword" className="block pb-4">
                        Confirm  Password :</label>
                    <input className="bg-white border p-2 border-gray-300" type="password" id="cpassword" placeholder="your password" required />
                    <div className="text-right py-4 ">

                        <input type="submit" className="px-4 text-white bg-yellow-500 rounded-md " value="Register" />
                    </div>
                    <div className="text-red-400">{userError}</div>
                </form>
                <div className="mt-4">Have an account ? <Link className="px-4 text-white bg-yellow-500 rounded-md " to="/login">Login</Link></div>
            </div >
        </div>
    )
}

export default Register;

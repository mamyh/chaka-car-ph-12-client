
import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const NavLink = ({ myClass = null }) => {
    const { user, logOut } = useAuth();
    let myModifiedClass = myClass ? myClass : "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium";
    return (
        <div>
            <Link
                to="/"
                className={myModifiedClass}
            >
                Home
            </Link>

            <Link
                to="/about"
                className={myModifiedClass}
            >
                About
            </Link>

            {user.email ? <>

                <Link
                    to="/explore"
                    className={myModifiedClass}
                >
                    Explores
                </Link>
                <Link
                    to="/dashboard"
                    className={myModifiedClass}
                >
                    Dashboard
                </Link>

                <Link
                    to="/"
                    className={myModifiedClass}
                >
                    {user.displayName}
                </Link>
                <button onClick={logOut} className={myModifiedClass}>Logout</button>
            </> : <> <Link
                to="/login"
                className={myModifiedClass}
            >
                login
            </Link>
                <Link
                    to="/register"
                    className={myModifiedClass}
                >
                    Sign up
                </Link></>}
        </div>
    )
}

export default NavLink

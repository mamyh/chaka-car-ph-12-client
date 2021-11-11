import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>

            </button>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;

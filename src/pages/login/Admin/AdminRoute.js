import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../shared/Spinner/Spinner';



const AdminRoute = ({ children, ...rest }) => {
    let { user, isLoading, isAdmin } = useAuth();

    if (isLoading) {
        return (
            <Spinner></Spinner>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user?.email && isAdmin) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;
